FROM influxdb:2.7.1

COPY .env /docker-entrypoint-initdb.d/.env
COPY ./influxdb/init_influxdb.sh /docker-entrypoint-initdb.d/init_influxdb.sh

RUN apt update && apt install -y dos2unix
RUN dos2unix /docker-entrypoint-initdb.d/init_influxdb.sh /docker-entrypoint-initdb.d/.env

RUN chmod +x /docker-entrypoint-initdb.d/init_influxdb.sh
