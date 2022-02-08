#!/bin/bash

# Push docker containers
# run `pnpm build:docker`` first

VERSION=1.1.1
# Docker username
USERNAME=reecerose

tag_and_push () {
  docker tag "$1" "${USERNAME}/$1:${VERSION}"
  docker push "${USERNAME}/$1:${VERSION}"
}

tag_and_push buy-me-a-cofee-server
tag_and_push buy-me-a-cofee-web
