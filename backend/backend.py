import hmac
import hashlib
import flask
from flask import abort, request, render_template
from werkzeug.exceptions import HTTPException
import subprocess
import os
from dotenv import load_dotenv
from livereload import Server

load_dotenv(os.path.abspath("") + "/.env")

staticFolder = os.path.abspath("") + "/static"
templateFolder = os.path.abspath("") + "/pages"

app = flask.Flask(__name__, static_folder=staticFolder, template_folder=templateFolder)
production = True if os.getenv("ENV") == "production" else False
script_path = os.path.abspath("") + "/backend/update.sh"
WEBHOOK_KEY = os.getenv("WEBHOOK_KEY")

##########################################
########## Webhook Handler ###############
##########################################

def verify_signature(payload, signature):
    """
    Verifies the GitHub webhook signature using the shared secret.
    """
    computed_signature = 'sha256=' + hmac.new(
        WEBHOOK_KEY.encode(), payload, hashlib.sha256
    ).hexdigest()
    
    return hmac.compare_digest(computed_signature, signature)

@app.route("/webhook", methods=['POST'])
def webhook():
    # Get the signature from the headers (GitHub sends it as X-Hub-Signature-256)
    signature = request.headers.get('X-Hub-Signature-256')
    if not signature:
        abort(400, description="Bad Request: No signature provided")
    
    # Get the raw payload
    payload = request.get_data()
    
    # Validate the signature
    if not verify_signature(payload, signature):
        abort(403, description="Forbidden: Invalid webhook signature")
    
    # If the signature is valid, proceed with the script execution
    try:
        if production:
            subprocess.run(f"sh {script_path}", check=True, shell=True)
            return {"status": "success", "message": "Shell script executed successfully."}
        else:
            print("Whoh!, I executed the github pull script")
            return {"status": "Failed", "message": "Server is not in production mode."}
    
    except subprocess.CalledProcessError as e:
        return {"status": "error", "message": f"Error executing script: {e}"}

##########################################
############## Website ###################
##########################################

@app.route("/")
def home():
    return render_template("subpages/index.html")

@app.route("/<page>")
def page(page):
    try:
        return render_template(f'subpages/{page}.html')
    except:
        abort(404, description="File not found")

@app.route("/modpacks/<modpack>")
def modpack(modpack):
    try:
        return render_template(f'modpacks/{modpack}.html')
    except:
        abort(404, description="File not found")

@app.route("/logotyper/<logo>")
def logos(logo):
    try:
        return render_template(f'logotyper/{logo}.html')
    except:
        abort(404, description="File not found")

##########################################
########### Error Handling ###############
##########################################

@app.route("/error/<int:code>")
def error(code):
    if code in {400, 403, 404, 500}:
        abort(code)
    else:
        abort(404)

@app.errorhandler(404)
def page_not_found(e):
    return render_template("templates/404.html"), 404

@app.errorhandler(HTTPException)
def handle_http_exception(e):
    return render_template("templates/error.html", error=e), e.code


##########################################
############### RUN APP ##################
##########################################

if __name__ == "__main__":
    app.debug = not production
    server = Server(app.wsgi_app)
    
    server.watch(f"{templateFolder}/**/*")
    server.watch(f"{staticFolder}/**/*")
    
    server.serve(port=1515)