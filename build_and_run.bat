docker compose down

docker image rm scd-parser
docker image rm scd-network-test
docker image rm scd-server

docker build -f .\scd-parser.Dockerfile -t scd-parser .
docker build -f .\scd-network-test.Dockerfile -t scd-network-test .
docker build -f .\scd-server.Dockerfile -t scd-server .

docker compose up