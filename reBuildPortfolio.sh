#!/usr/bin/sh

cd ~/Portfolio

rm -rf dist/

git pull || echo failed; exit 10

npm run build || echo failed; exit 12

sudo rm -r /var/www/html/*
sudo cp -r /home/leadseason/Portfolio/dist/* /var/www/html/
sudo systemctl restart nginx.service
