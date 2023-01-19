data "aws_region" "current" {}

module "container_service" {
    source = "git::https://github.com/cloudposse/terraform-aws-ecs-container-definition.git?ref=0.52.0"

    essential = true

    container_name   = "docs-page"
    container_image  = "558258168256.dkr.ecr.us-west-2.amazonaws.com/docs:latest"
    container_memory = 512
    container_cpu    = 256

    # Default JHipster API Gateway port
    port_mappings = [
      {
        containerPort = 5000
        hostPort      = 5000
        protocol      = "TCP"
      }
    ]

    log_configuration = {
      logDriver = "awslogs"
      options   = {
          awslogs-group         = aws_cloudwatch_log_group.logs.id
          awslogs-region        = data.aws_region.current.name
          awslogs-stream-prefix = "docs-page"
      }
      secretOptions = null
    }

    environment = [
      {
        name = "APIGATEWAY_SERVICE_ENDPOINT"
        value = "${aws_service_discovery_service.discovery.name}.${aws_lb.docs.name}"
      }
    ]
}