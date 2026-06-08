#!/bin/bash
# deploy.sh - push portfolio to Vultr VPS
# Usage: bash deploy.sh

set -e

VPS_USER="root"
REMOTE_DIR="/var/www/spb-club/portfolio"

echo "=== Deploying SPB Club Portfolio ==="

rsync -avz --delete \
  --exclude 'deploy.sh' \
  --exclude 'setup-vps.sh' \
  --exclude 'nginx.conf' \
  --exclude '.DS_Store' \
  --exclude '.git' \
  . "$VPS_USER@vultr:$REMOTE_DIR/"

echo "Deployed. Live at: http://45.32.133.87"
