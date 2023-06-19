#!/bin/bash

export DOCKER_INFLUXDB_INIT_HOST=$DOCKER_INFLUXDB_INIT_HOST
export DOCKER_INFLUXDB_OPENHAB_BUCKET=$DOCKER_INFLUXDB_OPENHAB_BUCKET

#if os is windows (MINGW64_NT*) then use winpty
if [ "$(uname)" == "MINGW64_NT"* ]; then
  winpty docker exec -it influxdb influx bucket create -n openhab -o dniit -r 72h
else
  docker exec -it influxdb influx bucket create -n openhab -o dniit -r 72h
fi
