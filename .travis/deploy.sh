#!/bin/bash
set -ev

REGION=us-west-2
ECR=558258168256.dkr.ecr.${REGION}.amazonaws.com/docs:latest

docker tag docs:latest ${ECR}

aws ecr get-login-password --region $REGION  |  \
docker login --username AWS --password-stdin 558258168256.dkr.ecr.$REGION.amazonaws.com


docker push ${ECR}

cd ./infrastructure
terraform init -upgrade
terraform validate
terraform apply -auto-approve
