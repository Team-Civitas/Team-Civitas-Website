import flask
from flask import send_file, abort, request
import subprocess
import os
from dotenv import load_dotenv

load_dotenv(os.path.abspath("") + "/.env")

app = flask.Flask(__name__, static_folder=os.path.abspath("") + "/static", template_folder=os.path.abspath("") + "/template")

production = True if os.getenv("ENV") == "production" else False

@app.route("/")
def start():
    return send_file(os.path.abspath("") + "/index.html")

script_path = os.path.abspath("") + "/backend/update.sh"
WEBHOOK_KEY = os.getenv("WEBHOOK_KEY")

@app.route("/webhook", methods=['POST'])
def webhook():
    # Get the key from the request headers
    request_key = request.headers.get("Key")
    print("key: ", endld="")
    print(request_key)

    # Validate the key
    if request_key != WEBHOOK_KEY:
        abort(403, description="Forbidden: Invalid webhook key")

    try:
        if production:
            subprocess.run("sh " + script_path, check=True, shell=True)
            return {"status": "success", "message": "Shell script executed successfully."}
        else:
            print("Whoh!, I executed the github pull script")
            return {"status": "Failed", "message": "Server is not in production mode."}
    
    except subprocess.CalledProcessError as e:
        return {"status": "error", "message": f"Error executing script: {e}"}

@app.route("/template/<path:filename>")
def serve_template(filename):
    template_path = os.path.abspath("") + "/template/" + filename
    if os.path.exists(template_path):
        return send_file(template_path)
    else:
        abort(404, description="File not found")
