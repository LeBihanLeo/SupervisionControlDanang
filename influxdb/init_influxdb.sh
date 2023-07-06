source .env

start=""

if [[ "$(uname)" == "MINGW64_NT"* ]]; then
  start="winpty"
fi

$start docker exec -it influxdb influx bucket create -n $DOCKER_INFLUXDB_OPENHAB_BUCKET -o $DOCKER_INFLUXDB_INIT_ORG -r 0s