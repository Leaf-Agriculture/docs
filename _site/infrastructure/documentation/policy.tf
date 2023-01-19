data "aws_iam_policy_document" "assumed" {
  statement {
    effect    = "Allow"
    actions   = [ "sts:AssumeRole" ]
    principals {
      type        = "Service"
      identifiers = [ "ecs-tasks.amazonaws.com" ]
    }
  }
}

resource "aws_iam_role" "execution_role" {
  name        = "docs-js-execution-role"
  description = "Allows ECS tasks to call AWS services on your behalf"

  assume_role_policy = data.aws_iam_policy_document.assumed.json

  tags = {
    Name        = "docs-js-iam-role"
    Date        = timestamp()
    Terraform   = true
  }
}

# Adapted from:
#   https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_execution_IAM_role.html
data "aws_iam_policy_document" "execution_role_policy_document" {
  statement {
    effect    = "Allow"
    resources = [ "*" ]

    actions = [
      "ecr:GetAuthorizationToken",
      "ecr:BatchCheckLayerAvailability",
      "ecr:GetDownloadUrlForLayer",
      "ecr:BatchGetImage",

      "secretsmanager:GetSecretValue",

      "logs:CreateLogStream",
      "logs:PutLogEvents"
    ]
  }
}

resource "aws_iam_role_policy" "execution_role_policy" {
  name = "docs-js-execution-policy"
  role = aws_iam_role.execution_role.id
  policy = data.aws_iam_policy_document.execution_role_policy_document.json
}


#################
# IAM task role #
#################

resource "aws_iam_role" "task_role" {
  name        = "docs-js-task-role"
  description = "Role for the running task to calls AWS resources"

  assume_role_policy = data.aws_iam_policy_document.assumed.json

  tags = {
    Name        = "docs-js-task-role"
    Date        = timestamp()
    Terraform   = true
  }
}

data "aws_iam_policy_document" "task_policy_document" {
  statement {
    effect    = "Allow"
    resources = [ "*" ]
    actions   = [
      "ssm:GetParametersByPath",
      "lambda:InvokeFunction*"
    ]
  }
}

resource "aws_iam_role_policy" "task_role_policy" {
  name = "docs-js-policy"
  role = aws_iam_role.task_role.id
  policy = data.aws_iam_policy_document.task_policy_document.json
}