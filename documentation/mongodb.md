# MongoDB

## Connect to MongoDB

Find the container ID

```bash 
docker ps
```

Connect to the container  
Username and password are defined in the env/mongodb.env file

```bash
 docker exec -it <container-id> mongosh --username <username> --password <password>
 ```

Inside mongosh :

Show all databases

```bash
 show dbs 
```

Use a database    

```bash
use <database-name>
```

Display a table 

```bash
db.<table-name>.find()
```
