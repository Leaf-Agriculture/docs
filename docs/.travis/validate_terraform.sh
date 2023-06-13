#!/bin/bash
set -ev

(
    cd ./infrastructure
    terraform init -upgrade
    terraform validate
)