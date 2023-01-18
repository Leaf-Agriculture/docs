resource "aws_lb_target_group" "main" {
  name     = "docs-target-group"
  port     = 5000
  protocol = "HTTP"
  vpc_id   = var.vpc.id

  target_type = "ip"
  health_check {
    path    = "/"
    matcher = "200-301"
    interval = 300
    timeout = 120
  }
}

resource "aws_lb_listener" "main" {
  load_balancer_arn = aws_lb.docs.arn
  port              = 80
  protocol          = "HTTP"
  default_action {
    type             = "redirect"
    redirect {
      port        = 443
      protocol    = "HTTPS"
      status_code = "HTTP_301"
    }
  }
}

resource "aws_lb_listener" "https" {
  load_balancer_arn = aws_lb.docs.arn
  port              = 443
  protocol          = "HTTPS"
  ssl_policy = "ELBSecurityPolicy-2016-08"
  certificate_arn = "arn:aws:acm:us-west-2:558258168256:certificate/87540825-045e-44c2-b7ea-491a40e73a99"

  default_action {
    target_group_arn = aws_lb_target_group.main.arn
    type             = "forward"
  }
}

resource "aws_lb" "docs" {
  name               = "docs-page"
  internal           = false
  security_groups    = [aws_security_group.elb_sg.id]
  subnets            = var.vpc.public_subnets
  load_balancer_type = "application"
}

data "aws_route53_zone" "main" {
  name  = "withleaf.io."
}

resource "aws_route53_record" "main" {
  name    = "docs"
  zone_id = data.aws_route53_zone.main.id
  type    = "A"
  alias {
    name                   = aws_lb.docs.dns_name
    zone_id                = aws_lb.docs.zone_id
    evaluate_target_health = false
  }
}

resource "aws_security_group" "elb_sg" {
  name        = "docs-lb-sg"
  description = "Security group for public facing load balancer"
  vpc_id      = var.vpc.id

  ingress {
    description = "Allows input from anyone in the internet"
    from_port   = 0
    to_port     = 0
    protocol    = -1
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    description     = "Allows output only to members of ECS cluster"
    from_port       = 0
    to_port         = 0
    protocol        = -1
    security_groups = [var.cluster.sg]
  }
}