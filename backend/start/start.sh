#!/bin/bash

# Navigate to the backend directory
cd "$(dirname "$0")/../backend"

# Start the Gunicorn web server in production mode
gunicorn backend:backend --bind 0.0.0.0:8000 --workers 3 --env ENV=production --port 1515