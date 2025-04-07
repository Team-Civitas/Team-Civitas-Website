import flask
from flask import send_file
import subprocess
import os

app = flask.Flask(__name__, static_folder=os.path.abspath("") + "/static")

#script_path = "/home/TeamCivitas/Team-Civitas-Repo/backend/update.sh"

@app.route("/webhook", methods=['POST'])
def webhook(data):
    try:
        #subprocess.run([script_path], check=True, shell=True)
        print("Executing shell script...")
        return {"status": "success", "message": "Shell script executed successfully."}
    except subprocess.CalledProcessError as e:
        return {"status": "error", "message": f"Error executing script: {e}"}

@app.route("/")
def start():
    return send_file(os.path.abspath("") + "/index.html")