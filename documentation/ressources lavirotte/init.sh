#!/bin/bash

export BASEDIR=/mnt/c/projets/SupervisionControlDanang/openhab

RED="\033[0;31m"
GREEN="\033[0;32m"
YELLOW="\033[0;33m"
NC="\033[0m" # No Color

# Create openhab user and add current user to openhab group
if ! getent passwd openhab > /dev/null
then
    echo -n "Create user openhab... "
    sudo useradd -r -s /sbin/nologin openhab
    echo -e "${GREEN}done${NC}"
fi
if ! getent group openhab > /dev/null
then
    echo -n "Create group openhab... "
    sudo usermod -a -G openhab `whoami`
    echo -e "${GREEN}done${NC}"
fi

# Move userdata for the first openHAB start generating all configuration files
if [ "$1" = "--migrate" ]
then
    if [ ! -d ${BASEDIR}/userdata.backup ]
    then
        ./backup_ids.sh
        mv ${BASEDIR}/userdata ${BASEDIR}/userdata.backup
        git checkout -- userdata # extract git data to restart from theses files
    else
        echo -e "${RED}Error${NC}: userdata.backup directory already exists. ${RED}Exit${NC}."
        exit 1
    fi
fi

# In all cases (init or migrate), save the userdata to restore these files
if [ ! -d ${BASEDIR}/userdata.git ]
then
    mv ${BASEDIR}/userdata ${BASEDIR}/userdata.git
else
    echo -e "${RED}Error${NC}: userdata.git directory already exists. ${RED}Exit${NC}."
    exit 1
fi

# Create all needed directories
echo -n "Create directories... "
sudo mkdir -p ${BASEDIR}/{conf,cont-init.d,userdata,addons}
echo -e "${GREEN}done${NC}"

# Apply the right permissions to all directories
./chperm.sh

# First start container to create a basic configuration files
echo "Start openHAB container... "
if [ "$(docker ps -a -q -f name=openhab)" = "" ]
then
    docker-compose up # if openHAB container is not already existing, should start 2 times du to a bug in openHAB group createion (this is the first one)
fi
docker-compose up
echo "openHAB container stopped."

if [ "$1" = "--migrate" ] 
then
    echo -n "Copy all backup secret files to userdata... "
    sudo tar xzvf ${BASEDIR}/userdata.backup/backup/backup_ids.tgz
    echo -e "${GREEN}done${NC}"
fi

echo -n "Copy all init files to userdata directory... "
for file in $(find ${BASEDIR}/userdata.git/*)
do
    new_file=${BASEDIR}/userdata/${file#$BASEDIR/userdata.git/}
    if [ -d ${file} ]
    then
        sudo mkdir -p ${new_file}
    elif [ -f ${file} ]
    then
        sudo cp -a ${file} ${new_file}
    fi
done
echo -e "${GREEN}done${NC}"
