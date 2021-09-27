#!/bin/bash

git pull

hash=$(git rev-parse HEAD)

container_name=speedyboi-$hash

echo "building $container_name"

docker build -t $container_name .

docker stop speedyboi || true

docker logs speedyboi >> ./speedyboi.log 2>&1

echo "Logs for $container_name starting below" >> ./speedyboi.log

docker rm speedyboi || true

docker run -dp 5000:5000 --name speedyboi $container_name
