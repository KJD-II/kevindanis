#!/bin/bash
echo "Updating DNS stack..."
aws --profile kjd cloudformation update-stack \
    --stack-name kevindanis-dns \
    --template-body file://../cloudformation/dns-stack.yml
