# Utilisation du broker MQTT

## Current test users

 - test:test
 - admin:admin123

## Create a new user password in password.txt

```shell
cd /mosquitto/config
mosquitto_passwd password.supersecurity user
```

## Test MQTT configuration

For testing this broker, the following documentation was used: [Mosquitto pub  and sub clients](http://www.steves-internet-guide.com/mosquitto_pub-sub-clients/)

To send a message to the broker with an authenticated user:

`mosquitto_pub -h localhost -m "test message" -t todel/test -u user -P "passwd" -d`

To receive the sent message:

`mosquitto_sub -v -h localhost -u user -P passwd -t \#`