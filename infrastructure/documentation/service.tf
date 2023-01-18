resource "aws_cloudwatch_log_group" "logs" {
  name              = "docs-logs"
  retention_in_days = 3

  tags = {
    Name        = "docs-logs"
    Date        = timestamp()
    Terraform   = true
  }
}

resource "aws_ecs_task_definition" "task" {
  family = "docs-task"
  container_definitions = "[ ${module.container_service.json_map_encoded} ]"
  execution_role_arn = aws_iam_role.execution_role.arn
  task_role_arn            = aws_iam_role.task_role.arn
  network_mode             = "awsvpc"
  requires_compatibilities = [ "FARGATE" ]
  cpu                      = 256
  memory                   = 512

  tags = {
    Name        = "docs-js-task"
    Date        = timestamp()
    Terraform   = true
  }
}


resource "aws_security_group" "sg" {
  name        = "docs-sg"
  description = "Security group to allow internet connections to gateway2"
  vpc_id      = var.vpc.id

  ingress {
    description = "Only allows connections from balancer"
    from_port   = 80
    to_port     = 80
    protocol    = "TCP"
    security_groups = [var.balancer.sg]
  }

  egress {
    description = "Allows connections to everywhere"
    from_port   = 0
    to_port     = 0
    protocol    = -1
    cidr_blocks = [ "0.0.0.0/0" ]
  }

  tags = {
    Name        = "docs-sg"
    Date        = timestamp()
    Terraform   = true
  }
}


resource "aws_ecs_service" "service" {
  name            = "docs-page"
  cluster         = var.cluster.id
  task_definition = aws_ecs_task_definition.task.arn
  launch_type     = "FARGATE"

  desired_count                      = 1
  deployment_maximum_percent         = 200
  deployment_minimum_healthy_percent = 70

  # This was added because JHipster takes some time to boot up. So, it would
  # fail our health checks, triggering a stop and reboot from the load balancer
  #
  # The value of 120 was chosen by trial and error
  health_check_grace_period_seconds  = 180

  network_configuration {
    subnets          = var.vpc.public_subnets
    security_groups  = [ aws_security_group.sg.id, var.cluster.sg ]
    assign_public_ip = true
  }

  service_registries {
    registry_arn = aws_service_discovery_service.discovery.arn
  }

  # Public load balancer config
  #
  # It redirects everything it receives to this service.
  load_balancer {
    container_name   = "docs-page"
    container_port   = 5000
    target_group_arn = aws_lb_target_group.main.arn
  }

  lifecycle {
    ignore_changes = [desired_count]
  }
}


resource "aws_service_discovery_service" "discovery" {
  name         = "docs-discovery"
  namespace_id = var.dns.id
  description  = "Service Discovery for docs"

  dns_config {
    routing_policy = "MULTIVALUE"
    namespace_id   = var.dns.id

    dns_records {
      ttl  = 60
      type = "A"
    }
  }

  health_check_custom_config {
    failure_threshold = 1
  }
}
