#!/bin/sh

source .env

start=""

if [[ "$(uname)" == "MINGW64_NT"* ]]; then
  start="winpty"
fi


if docker exec -it influxdb influx bucket list --skip-verify | grep -q "openhab"; then
    echo "Bucket 'opnehab' already exists"
else
  $start docker exec -it influxdb influx bucket create -n "$DOCKER_INFLUXDB_OPENHAB_BUCKET" -o "$DOCKER_INFLUXDB_INIT_ORG" -r 0s --skip-verify
  if docker exec -it influxdb influx bucket list --skip-verify | grep -q "openhab"; then
    echo "Bucket 'openhab' created"
  else
    echo "Error, bucket 'openhab' not created"
  fi
fi
