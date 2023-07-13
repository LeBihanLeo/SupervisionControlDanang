#!/bin/bash

RED="\033[0;31m"
GREEN="\033[0;32m"
YELLOW="\033[0;33m"
NC="\033[0m" # No Color

echo -e "Init script"

SLEEP_TIME=1
echo -e "${YELLOW}Sleeping for $SLEEP_TIME sec to let the containers start${NC}"
sleep $SLEEP_TIME

# influxdb
echo -e "InfluxDB"

source ./influxdb/init_influxdb.sh

echo -e "${GREEN}End of init script${NC}"