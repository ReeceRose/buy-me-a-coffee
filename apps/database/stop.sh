#!/bin/bash

container_name=buy-me-a-coffee-db

if [ "$( docker container inspect -f '{{.State.Status}}' $container_name )" == "running" ]; then
  docker stop buy-me-a-coffee-db
fi