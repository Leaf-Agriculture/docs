#!/bin/bash
set -ev

sudo apt-get install unzip
wget -q "https://releases.hashicorp.com/terraform/1.0.2/terraform_1.0.2_linux_amd64.zip"
# I need to unzip the terraform to another folder otherwise it would conflict with the name of the terraform folder
unzip terraform_1.0.2_linux_amd64.zip -d /tmp/
sudo install /tmp/terraform /usr/local/bin/

terraform --version