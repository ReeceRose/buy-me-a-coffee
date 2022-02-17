#!/bin/bash

container_name=buy-me-a-coffee-db

if [ "$( docker container inspect -f '{{.State.Status}}' $container_name )" == "exited" ]; then
  docker start buy-me-a-coffee-db
  exit 0
fi

if [ "$( docker container inspect -f '{{.State.Status}}' $container_name )" != "running" ]; then
  docker run --name buy-me-a-coffee-db -p 5432:5432 \
    -e POSTGRES_USER=postgres \
    -e POSTGRES_PASSWORD=password \
    -v postgres_data:/var/lib/postgresql/data \
    postgres:14.2
fi