# InfluxDB

## Add and manage alerts 

Alerts shoud be sent from this central point and not from [Grafana](../grafana/README.md).

1. Add `CHECKS`
  - In the left menu click the bell icon (Alerts)
  - Click on `+ CREATE`
  - Click on `Threshold Check`
    1. `DEFINE QUERY`
      - Use the right field and agregate function
    2. `CONFIGURE CHECK`
      - Add thresholds
2. Add `NOTIFICATION ENDPOINTS`
3. Add `NOTIFICATION RULES`

You now should have your alerts sent to your Webhook/Slack or other

## Usage

### Prerequisites

Windows with Git Bash or linux

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
