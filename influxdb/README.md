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

## Info

NOTE: Valid units are nanoseconds (ns), microseconds(us), milliseconds (ms), seconds (s), minutes (m), hours (h), days (d), and weeks (w).
