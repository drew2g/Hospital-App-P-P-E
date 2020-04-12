#!/usr/bin/env bash

docker-compose build
docker-compose run --rm server yarn test $1