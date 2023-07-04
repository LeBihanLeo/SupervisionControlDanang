# Grafana

## Import the home dashboard

Summary : import influxDB datasource then import the home dashboard

1. Open [Grafana (localhost:3000)](http://localhost:3000)
2. Add the InfluxDB datasource :
   1. Click on the gear icon on the left menu then click on `Data Sources`
   2. Click on `Add data source`
   3. Click on `InfluxDB`
      - Query language: `Flux`
      - HTTP
        - URL: `http://influxdb:8086`
        - Leave the rest as default
       - Auth
         - Uncheck `Basic Auth`
       - InfluxDB Details
         - Organization: `dniit`
         - Token : `DOCKER_INFLUXDB_INIT_ADMIN_TOKEN` in `.env` file
         - Bucket: `openhab`
       - Click on `Save & Test`

You should now see `✅ X buckets found`
