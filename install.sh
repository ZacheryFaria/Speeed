#!/bin/bash

git pull

hash=$(git rev-parse HEAD)

container_name=speedyboi-$hash

echo "building $container_name"

sudo docker build -t $container_name .

sudo docker stop speedyboi || true

sudo docker logs speedyboi >> ./speedyboi.log 2>&1

echo "Logs for $container_name starting below" >> ./speedyboi.log

sudo docker rm speedyboi || true

sudo docker run -dp 5000:5000 --name speedyboi $container_name
