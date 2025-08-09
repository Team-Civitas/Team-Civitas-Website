#!/bin/bash
cd /home/TeamCivitas/Team-Civitas-Repo
git pull origin main
systemctl restart teamcivitas.service &