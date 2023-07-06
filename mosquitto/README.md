# Mosquitto

## Prerequisites

linux with packages : `mosquitto`, `mosquitto-clients`

## Current test users

| Username | Password |
|----------|----------|
| test     | test     |
| admin    | admin123 |

## Create a new user password in password.txt

```bash
cd mosquitto/config
mosquitto_passwd password.supersecurity user
```

## Test MQTT configuration

For testing this broker, the following documentation was used:
[Mosquitto pub  and sub clients](http://www.steves-internet-guide.com/mosquitto_pub-sub-clients/)

To send a message to the broker with an authenticated user:

```bash
mosquitto_pub -h localhost -m "test message" -t todel/test -u user -P "passwd" -d
```

To receive the message:

```bash
mosquitto_sub -v -h localhost -u user -P passwd -t \#
```
