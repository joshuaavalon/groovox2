#!/usr/bin/env bash

docker-compose up -d;
sleep 20;
flyway migrate -configFiles=./flyway.conf;
