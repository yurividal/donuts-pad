#!/bin/bash

# Get the directory path where the script resides
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"

# Change directory to the script's directory
cd "$SCRIPT_DIR"

# Execute docker compose down -v
docker compose down -v

# Execute docker compose up -d
docker compose up -d
