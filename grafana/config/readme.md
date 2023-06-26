# Configurer Grafana pour influxdb v
1) Click on "Configuration" in the left menu, then "data sources"
2) Click on "Add data sources"
3) Follow this configuration :
   1) Query Language: Flux
   2) URL: http://influxdb:8086
   3) Uncheck "basic auth"
   4) Organisation: dniit
   5) Token: token influxdb2
   6) bucket:openhab
   7) Click on "Save and test"