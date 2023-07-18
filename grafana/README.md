# Grafana

## Credentials

admin/admin

## Manual import of the home dashboard

Summary : import influxDB datasource then import the home dashboard

1. Open [Grafana (localhost:3000)](http://localhost:3000)
2. Add the InfluxDB datasource :
   - Click on the gear icon on the left menu then click on `Data Sources`
   - Click on `Add data source`
   - Click on `InfluxDB`
      - Query language: `Flux`
      - HTTP
        - URL: `http://influxdb:8086` ou `https://apps.vngalaxy.vn:8086`
        - Leave the rest as default
       - Auth
         - Uncheck `Basic Auth`
       - InfluxDB Details
         - Organization: `dniit`
         - Token : `DOCKER_INFLUXDB_INIT_ADMIN_TOKEN` in `.env` file
         - Bucket: `openhab`
       - Click on `Save & Test`  
   - You should now see `✅ 4 buckets found`
3. Import the home dashboard :
   - Click on the four squares icon on the left menu then click on `Browse`
   - Click on `Import`
   - Click on `Upload JSON file`
     - Choose the file `grafana/dashboards_(manual_import)/home_dashboard.json`
   - Chose the influxDB datasource you just created
   - Click on `Import`

