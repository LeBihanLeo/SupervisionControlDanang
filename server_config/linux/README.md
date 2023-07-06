# CentOS 7 specific configurations

## Install Mosquitto client

Source : [How To Install and Secure the Mosquitto MQTT Messaging Broker on CentOS 7](https://www.digitalocean.com/community/tutorials/how-to-install-and-secure-the-mosquitto-mqtt-messaging-broker-on-centos-7)

## Installed packages in the VM

```bash
# Basic tools
yum install git
yum install nano
yum install python3 #installs pip3 too

# Docker 
yum install -y yum-utils device-mapper-persistent-data lvm2
yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
yum install -y docker-ce

# Eclipse mosquitto
yum install epel-release # adds the EPEL repository
yum install mosquitto
yum install mosquitto-clients
```
