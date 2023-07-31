# nginx

## Reverse proxy configuration

### openHAB 

openHAB is running on port 8443 thanks to the reverse proxy, the reverse proxy adds security too with an additional layer of authentication.

| Username | Password |
|----------|----------|
| admin    | admin    |

To change the password, run the following command in this directory:

```bash
sudo htpasswd -c .htpasswd <username>
```