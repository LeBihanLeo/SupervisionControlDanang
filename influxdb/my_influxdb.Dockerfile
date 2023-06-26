FROM influxdb:2.1.1

COPY ./new_entrypoint.sh /entrypoint.sh
RUN apt update && apt install -y dos2unix
RUN dos2unix /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
