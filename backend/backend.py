import hmac, hashlib, subprocess, os

from dotenv import load_dotenv

import flask
from flask import abort, request, render_template, jsonify, url_for, send_file
from werkzeug.exceptions import HTTPException
from markupsafe import escape

import json
import re

from typing import Dict, List

load_dotenv(os.path.abspath("") + "/.env")

staticFolder = os.path.abspath("") + "/static"
templateFolder = os.path.abspath("") + "/pages"

app = flask.Flask(__name__, static_folder=staticFolder, template_folder=templateFolder)
production = True if os.getenv("ENV") == "production" else False
script_path = os.path.abspath("") + "/backend/update.sh"
WEBHOOK_KEY = os.getenv("WEBHOOK_KEY")

if not production:
    from livereload import Server # type: ignore

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
############## JSON DATA #################
##########################################

def get_filenames_without_extensions(folder_path: str) -> List[str]:
    """
    Returns a list of filenames (without extensions) in the specified folder.
    Only includes regular files (not directories).
    """
    if not os.path.isdir(folder_path):
        return []

    return [
        os.path.splitext(entry)[0]
        for entry in os.listdir(folder_path)
        if os.path.isfile(os.path.join(folder_path, entry))
    ]
    
def is_image_file(filename):
    IMAGE_EXTENSIONS = (".png", ".jpg", ".jpeg", ".webp", ".gif", ".bmp", ".svg")
    return filename.lower().endswith(IMAGE_EXTENSIONS)

def count_images_in_folder(folder_path):
    files = os.listdir(folder_path)
    image_files = [
        file for file in files
        if os.path.isfile(os.path.join(folder_path, file)) and is_image_file(file)
    ]
    return len(image_files)

def count_images_with_paths(root_folder: str, base_path: str = "") -> Dict[str, int]:
    """
    Counts images recursively and maps results to a flattened path like 'logotypes/recreated'.
    """
    results = {}

    if not os.path.isdir(root_folder):
        return results

    for entry in os.listdir(root_folder):
        subfolder_path = os.path.join(root_folder, entry)
        if os.path.isdir(subfolder_path):
            relative_path = f"{base_path}/{entry}" if base_path else entry

            # Count images in this subfolder
            image_count = count_images_in_folder(subfolder_path)
            if image_count > 0:
                results[relative_path] = image_count

            # Recursively collect subfolder results
            nested_results = count_images_with_paths(subfolder_path, relative_path)
            results.update(nested_results)

    return results

json_data = count_images_with_paths(staticFolder + "/img")
@app.route("/json-info")
def json_info():
    global json_data

    if not production:
        json_data = count_images_with_paths(staticFolder + "/img")
    
    return jsonify(json_data)

##########################################
############## Website ###################
##########################################

def verifyPath(path):
    """
    Verifies if the path is valid and does not contain any illegal characters.
    """
    if not re.fullmatch(r'[a-zA-Z0-9_-]+', path):
        abort(400, description="Invalid path")
    return True

@app.route("/")
def home():
    return render_template("subpages/index.html")

@app.route("/<page>")
def page(page):
    verifyPath(page)
    try:
        return render_template(f'subpages/{page}.html')
    except:
        abort(404, description="File not found")

existingModpacks = get_filenames_without_extensions(f"{templateFolder}/data")
@app.route("/modpacks/<modpack>")
def modpack_route(modpack):
    
    if not production:
        existingModpacks = get_filenames_without_extensions(f"{templateFolder}/data")
        
    if modpack not in existingModpacks:
        abort(404, description="File not found")
    
    try:
        with open(f"{templateFolder}/data/{escape(modpack)}.json", encoding="utf-8") as f:
            data = json.load(f)
    except FileNotFoundError:
        abort(404, description="File not found")

    # Build URLs for downloads and logotype
    data["download"]["modpack"]["modpack_download_url"] = url_for("static", filename=f"files/{data['download']['modpack']['filename']}")
    data["download"]["world"]["world_download_url"] = url_for("static", filename=f"files/{data['download']['world']['filename']}")
    data["modpack"]["image_url"] = url_for("static", filename=f"img/logotypes/{data['modpack']['id']}/{data['modpack']['logotype']}")

    info = data["info"]
    for item in info:
        if "version" not in item:
            item["version"] = ""
        if "image" not in item: 
            label = item.get("label").lower()
            match label:
                case "forge":
                    item["image"] = url_for("static", filename="img/details/forge.webp")
                case "fabric":
                    item["image"] = "https://fabricmc.net/assets/logo.png"
                case "neoforge":
                    item["image"] = "https://neoforged.net/img/authors/neoforged.png"
                case "minecraft":
                    item["image"] = "https://feedback.minecraft.net/hc/theming_assets/01HZH4GFS6HZFCFWQPVZT51JSB"
                case "create":
                    item["image"] = "https://wiki.createmod.net/create-icon-large.webp" 
    
    try:
        return render_template(
            "templates/modpack_template.html",
            modpack=data["modpack"],
            download=data["download"],
            players=data["players"],
            info=info
        )
    except FileNotFoundError:
        abort(404, description="Template not found")

@app.route("/logotyper/<logo>")
def logos(logo):
    verifyPath(logo)
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
    return render_template("templates/errors/404.html"), 404

@app.errorhandler(HTTPException)
def handle_http_exception(e):
    return render_template("templates/errors/error.html", error=e), e.code

##########################################
############### RUN APP ##################
##########################################

if __name__ == "__main__":
    app.debug = not production
    if production:
        app.run(port=1515)
    else: 
        server = Server(app.wsgi_app)

        server.watch(f"{templateFolder}/**/*")
        server.watch(f"{staticFolder}/**/*")

        server.serve(port=1515)