import subprocess
import os
from webhook import Webhook

# Define the path to your shell script
script_path = "/path/to/your_script.sh"

# Create a function to handle the webhook trigger
def handle_webhook(data):
    try:
        # Execute the shell script when the webhook is triggered
        subprocess.run([script_path], check=True, shell=True)
        return {"status": "success", "message": "Shell script executed successfully."}
    except subprocess.CalledProcessError as e:
        return {"status": "error", "message": f"Error executing script: {e}"}

# Create the webhook listener
webhook = Webhook('/webhook', handle_webhook)

# Start the webhook listener on port 5000
webhook.run(host='0.0.0.0', port=5000)
