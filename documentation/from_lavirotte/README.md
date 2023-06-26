# Install openHAB to manage GTC

## Install openHAB

First of all, you have to clone this repository with the following command:
```
git clone https://ubinas.polytech.unice.fr:38443/gtc/openhab.git
```

Before launching the init script, modify the BASEDIR variable in this script.
```
./init.sh
```

The last thing is to launch the docker image with the following command:
```
docker-compose up -d
```

## Connect to logs

To see the openhab logs, you can run the following command:
```
docker exec -it openhab /opanhab/runtime/bin/client -i habopen
```
then when you are connected to karaf, type ```log:tail``` to view the log messages.

# Develop and enhance system

## Migrating from one openHAB release to a newer one

To upgrade openHAB release, a shell script is here to automate the process. You just have to run the following command in tools directory:
```
openhab-migrate.sh <old_release_number> <new_release_number>
```