# Install et get Certbot HTTPS certification

Source : [certbot.eff.org/instructions](https://certbot.eff.org/instructions?ws=other&os=centosrhel7)

## Install `snapd` and `certbot`

```bash
sudo yum install epel-release
sudo yum install snapd
sudo systemctl enable --now snapd.socket
sudo ln -s /var/lib/snapd/snap /snap
sudo systemctl start snapd
sudo snap install core
sudo snap refresh core
```

## Get HTTPS certification

```bash
sudo snap install --classic certbot
sudo ln -s /snap/bin/certbot /usr/bin/certbot
sudo certbot certonly --standalone
```

If you are getting an error telling you that port 80 is not reachable :

```bash
sudo firewall-cmd --zone=public --add-port=80/tcp --permanent
sudo firewall-cmd --reload
```

Check that the port is open 

```bash
sudo firewall-cmd --list-all
```

On our vm we have the following output :

```bash
Certificate is saved at: /etc/letsencrypt/live/apps.vngalaxy.vn/fullchain.pem
Key is saved at:         /etc/letsencrypt/live/apps.vngalaxy.vn/privkey.pem
```

You now have to copy the content of the files `fullchain.pem` and `privkey.pem` to the `certificates` directory of the project.
