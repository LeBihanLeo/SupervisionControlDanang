docker compose down
docker image rm scd-server 
docker build -f .\Dockerfile -t scd-server .
docker compose up
pause