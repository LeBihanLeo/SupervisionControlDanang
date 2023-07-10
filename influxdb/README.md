# InfluxDB

## Prerequisites

Windows with Git Bash or linux

## Usage

At the first launch of InfluxDB, openHAB bucket does not exist; we will add it with this script

```bash
bash init_influxdb.sh
```

You should see : 

```txt
ID                      Name    Retention       Shard group duration    Organization ID         Schema Type
XXXXXXXXXXXXXXXX        openhab infinite        XXXhXmXs                XXXXXXXXXXXXXXXX        implicit
```

## Credentials

see `.env` file at the root of the project