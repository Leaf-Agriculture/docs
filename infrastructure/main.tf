terraform {

  backend "s3" {
    bucket         = "terraform-bucket-leaf"
    key            = "tools/docs.state"
    region         = "us-west-2"
    dynamodb_table = "terraform-table-leaf"
  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "3.48.0"
    }
    random = {
      source  = "hashicorp/random"
      version = "3.1.0"
    }
  }

}



provider "aws" {
  profile = "default"
  region  = "us-west-2"
}

#
# There is data related to VPC, subnets, and registry credentials that the
# service needs to be able to run properly
data "terraform_remote_state" "jhipster" {
  backend   = "s3"
  workspace = "prd"

  config = {
    bucket         = "terraform-bucket-leaf"
    key            = "jhipster.state"
    region         = "us-west-2"
    dynamodb_table = "terraform-table-leaf"
  }
}

module "docs" {
  source = "./documentation"


  vpc      = data.terraform_remote_state.jhipster.outputs.vpc
  cluster  = data.terraform_remote_state.jhipster.outputs.cluster
  dns      = data.terraform_remote_state.jhipster.outputs.dns
  balancer = data.terraform_remote_state.jhipster.outputs.balancer
}