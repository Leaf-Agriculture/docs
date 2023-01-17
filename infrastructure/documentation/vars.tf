variable "vpc" {
  description = "VPC info. Id and subnets"

  type = object({
    id              = string
    public_subnets  = list(string)
    private_subnets = list(string)
  })
}

variable "cluster" {
  description = "Cluster info. Id and security group"

  type = object({
    id = string
    sg = string
    name = string
  })
}

variable "dns" {
  description = "Private DNS info. Id and name"

  type = object({
    id   = string
    name = string
  })
}

variable "balancer" {
  description = "Balancer info. Id, security group and target group"
  type = object({
    arn          = string
    sg           = string
    target_group = string
  })
}