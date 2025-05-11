@echo off
set FLASK_ENV=development

cd "..\.."
call ".venv/Scripts/activate.bat"

python backend\backend.py