#!/bin/bash

export DOCKER_INFLUXDB_INIT_HOST=$DOCKER_INFLUXDB_INIT_HOST
export DOCKER_INFLUXDB_OPENHAB_BUCKET=$DOCKER_INFLUXDB_OPENHAB_BUCKET
winpty docker exec -it influxdb influx bucket create -n openhab -o dniit -r 72h

