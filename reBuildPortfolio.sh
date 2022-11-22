#!/usr/bin/sh

cd /home/leadseason/Portfolio

rm -rf dist/

git pull

if [ $? -eq 0 ]; then
  echo success
else
  echo failed
  exit 130
fi

npm run build

sudo rm -r /var/www/html/*
sudo cp -r /home/leadseason/Portfolio/dist/* /var/www/html/
sudo systemctl restart nginx.service
