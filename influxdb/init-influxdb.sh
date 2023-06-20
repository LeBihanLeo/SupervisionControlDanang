export DOCKER_INFLUXDB_INIT_HOST=$DOCKER_INFLUXDB_INIT_HOST
export DOCKER_INFLUXDB_OPENHAB_BUCKET=$DOCKER_INFLUXDB_OPENHAB_BUCKET

start=""

if [[ "$(uname)" == "MINGW64_NT"* ]]; then
  start="winpty"
fi

$start docker exec -it influxdb influx bucket create -n $DOCKER_INFLUXDB_OPENHAB_BUCKET -o $DOCKER_INFLUXDB_INIT_HOST -r 72h