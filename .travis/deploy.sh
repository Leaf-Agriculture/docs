#!/bin/bash
set -ev

# REGION=us-west-2
# ECR=558258168256.dkr.ecr.${REGION}.amazonaws.com/docs:latest
node ghpages.js

# export URL='https://docs.withleaf.io'
# export BASE='/'
# npx browserslist@latest --update-db
# npm run swizzle docusaurus-lunr-search SearchBar
# npm run build

# docker build -t docs .
# docker tag docs:latest ${ECR}

# aws ecr get-login-password --region $REGION  |  \
# docker login --username AWS --password-stdin 558258168256.dkr.ecr.$REGION.amazonaws.com


# docker push ${ECR}

# cd ./infrastructure
# terraform init -upgrade
# terraform validate
# terraform apply -auto-approve


# aws ecs update-service \
#     --force-new-deployment \
#     --cluster jh-cluster-prd \
#     --service docs-page --region us-west-2
