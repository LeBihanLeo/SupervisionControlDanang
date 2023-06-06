docker compose down
docker image rm scd-server 
docker build -f .\scd-server.Dockerfile -t scd-server .
docker compose up