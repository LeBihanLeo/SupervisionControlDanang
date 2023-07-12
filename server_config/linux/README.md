# CentOS 7 specific configurations

## Install Mosquitto client

Source: [How To Install and Secure the Mosquitto MQTT Messaging Broker on CentOS 7](https://www.digitalocean.com/community/tutorials/how-to-install-and-secure-the-mosquitto-mqtt-messaging-broker-on-centos-7)

## Installed packages in the VM

if you can `ping 1.1.1.1` but you cannot `ping mirrorlist.centos.org` then you need to configure a dns server in `/etc/resolv.conf`:

```bash
echo -e "nameserver 8.8.8.8\nnameserver 8.8.4.4" >> /etc/resolv.conf
```

```bash
# Basic tools
yum install git -y 
yum install nano -y 
yum install python3 -y #installs pip3 too

yum -y install epel-release
yum -y install htop

# docker 
curl -fsSL https://get.docker.com | sh
yum install docker-compose -y
systemctl start docker

# certbot for https
sudo yum install epel-release
sudo yum install snapd
sudo systemctl enable --now snapd.socket
sudo ln -s /var/lib/snapd/snap /snap
sudo systemctl start snapd
sudo snap install core
sudo snap refresh core
```
