#!/bin/bash

export BASEDIR=/home/gtb/openhab

GREEN='\033[0;32m'
NC='\033[0m' # No Color

echo -n "Change owner and permissions to all directories and files... "
sudo chown -R openhab:openhab ${BASEDIR}/{addons,conf,cont-init.d,userdata,tools}
sudo chmod -R g+w ${BASEDIR}/{addons,conf,cont-init.d,userdata,tools}
echo -e "${GREEN}done${NC}"
