---
output:
  pdf_document: default
  html_document: default
---

# API JSON schema proposition

## Current data format

we can see here that the data format between the two following devices is not consistent, this is why we need to propose a new data format.

### Temperature, Humidity, Luminosity device example

Request : `POST api.vngalaxy.vn/api/uplink`  
Bearer token : `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXZFVUkiOiI2MjdkMmVjOWNhZDgxN2EyIiwiYXBwSUQiOiIzIiwiaWF0IjoxNjkwMzU1MTEyfQ.NFdpnmxu65XOb446-_20mmt1SHPJGRKIsxy_Q5TsTG8`

```json
{
    "err": 0,
    "msg": "Get uplink data successfully",
    "data": [
        {
            "_id": "64c09867600db3ad9ee288cd",
            "appID": "3",
            "devEUI": "627d2ec9cad817a2",
            "rxInfo": [
                [
                    {
                        "gatewayID": "ac1f09fffe06fcf2",
                        "time": "2023-07-26T03:51:42.832844Z",
                        "rssi": -54,
                        "loRaSNR": 10.5,
                        "location": {
                            "longitude": 108.15388,
                            "latitude": 16.07513,
                            "altitude": -33
                        },
                        "uplinkID": "0038a792-1e6b-4de1-b7df-7f44b8b07cff"
                    },
                    {
                        "gatewayID": "ac1f09fffe00ab0a",
                        "time": "2023-07-26T03:51:42.832844Z",
                        "rssi": -109,
                        "loRaSNR": -1,
                        "location": {
                            "longitude": 108.15341,
                            "latitude": 16.07524,
                            "altitude": 66
                        },
                        "uplinkID": "d09715cc-4e10-4bcb-8031-7f3035eb660a"
                    },
                    {
                        "gatewayID": "a840411ef5b04150",
                        "time": "2023-07-26T03:51:42.839438Z",
                        "rssi": -48,
                        "loRaSNR": 10,
                        "location": {
                            "longitude": 108.15205,
                            "latitude": 16.07482,
                            "altitude": 10
                        },
                        "uplinkID": "d9d0dbfd-165b-4c5a-bc0a-c5768509069b"
                    }
                ]
            ],
            "txInfo": {
                "frequency": 923100000,
                "loRaModulationInfo": {
                    "bandwidth": 0,
                    "spreadingFactor": 0,
                    "codeRate": "String"
                }
            },
            "fCnt": 11001,
            "fPort": 1,
            "data": "AWcBLAJoeAMCAU8EZQNh",
            "objectJSON": {
                "analogInput": {
                    "3": 3.35
                },
                "humiditySensor": {
                    "2": 60
                },
                "illuminanceSensor": {
                    "4": 865
                },
                "temperatureSensor": {
                    "1": 30
                }
            },
            "devAddr": "String",
            "confirmUplink": true,
            "__v": 0
        }
    ]
}
```

MP device example

Request : `POST api.vngalaxy.vn/api/uplink`  
Bearer token : `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXZFVUkiOiJlYzJiYjA4ZmMyYzI0NjBiIiwiYXBwSUQiOiIzIiwiaWF0IjoxNjkwMTY5NzkxfQ.SMzyudo9nApyKqhiy0bdHaklmGffWfd3aSSlVZTpqh8`

```json
{
    "err": 0,
    "msg": "Get uplink data successfully",
    "data": [
        {
            "_id": "64c09d7d600db3ad9ee28ab1",
            "appID": "3",
            "devEUI": "ec2bb08fc2c2460b",
            "rxInfo": [
                [
                    {
                        "gatewayID": "ac1f09fffe06fcf2",
                        "time": "2023-07-26T04:13:24.805253Z",
                        "rssi": -40,
                        "loRaSNR": 8.3,
                        "location": {
                            "longitude": 108.15404,
                            "latitude": 16.07518,
                            "altitude": 7
                        },
                        "uplinkID": "0d62c1c5-919f-488e-9d82-6c7ec3d8866a"
                    },
                    {
                        "gatewayID": "ac1f09fffe00ab0a",
                        "time": "2023-07-26T04:13:24.805251Z",
                        "rssi": -107,
                        "loRaSNR": 3,
                        "location": {
                            "longitude": 108.15341,
                            "latitude": 16.07524,
                            "altitude": 66
                        },
                        "uplinkID": "9bee554d-fa98-46aa-a26b-7df943f94313"
                    },
                    {
                        "gatewayID": "a840411ef5b04150",
                        "time": "2023-07-26T04:13:24.809137Z",
                        "rssi": -34,
                        "loRaSNR": 9.8,
                        "location": {
                            "longitude": 108.15205,
                            "latitude": 16.07482,
                            "altitude": 10
                        },
                        "uplinkID": "5900146a-a3dd-4559-988f-220229e22b10"
                    }
                ]
            ],
            "txInfo": {
                "frequency": 922700000,
                "loRaModulationInfo": {
                    "bandwidth": 0,
                    "spreadingFactor": 0,
                    "codeRate": "String"
                }
            },
            "fCnt": 4591,
            "fPort": 1,
            "data": "Cw0N",
            "objectJSON": {
                "data": {
                    "pm10_ug/m3": 13,
                    "pm1_ug/m3": 11,
                    "pm25_ug/m3": 13
                }
            },
            "devAddr": "String",
            "confirmUplink": true,
            "__v": 0
        }
    ]
}
```

## Proposition for new data format

Data we will input manually in our software `openhab_config_gen` :

- deviceEUI
- JWT token
- deviceName (optional ?)
- group (or subgroups) ex : "building_S/4th_floor/room_404"
- sensors
  - sensorType
  - unit

### JSON schema validation file

```json
{
  "type":"object",
  "properties":{
    "err":{
      "type":"integer"
    },
    "msg":{
      "type":"string"
    },
    "data":{
      "type":"object",
      "properties":{
        "devEUI":{
          "type":"string"
        },
        "time":{
          "type":"string",
          "pattern":"^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}(.[0-9]{1,9})?Z$"
        },
        "objectJSON": {
          "type": "object",
          "additionalProperties": {
            "type": "object",
            "properties": {
              "value": {
                "type": "number"
              },
              "unit":{
                  "type": "string"
                }
            },
            "required": [
              "value",
              "unit"
            ]
          }
        }

      },
      "required":[
        "devEUI",
        "time",
        "objectJSON"
      ]
    }
  },
  "required":[
    "err",
    "msg",
    "data"
  ]
}
```

the new `time` value is a string representing the time when the device sent its data to the LoRa gateway.
the `objectJSON` field is renamed to `sensors` and is now an object containing the data of the different sensors of the device.

### Example API response JSON 

This is an example of the response of the API we would expect for Temperature, Humidity, Luminosity device

```json
{
  "err":0,
  "msg":"Get uplink data successfully",
  "data":{
    "_id":"64c09867600db3ad9ee288cd",
    "appID":"3",
    "devEUI":"627d2ec9cad817a2",
    "time":"2023-07-26T03:51:42.832844Z",
    "rxInfo":[
      {
        "gatewayID":"ac1f09fffe06fcf2",
        "time":"2023-07-26T03:51:42.832844Z",
        "rssi":-54,
        "loRaSNR":10.5,
        "location":{
          "longitude":108.15388,
          "latitude":16.07513,
          "altitude":-33
        },
        "uplinkID":"0038a792-1e6b-4de1-b7df-7f44b8b07cff"
      },
      {
        "gatewayID":"ac1f09fffe00ab0a",
        "time":"2023-07-26T03:51:42.832844Z",
        "rssi":-109,
        "loRaSNR":-1,
        "location":{
          "longitude":108.15341,
          "latitude":16.07524,
          "altitude":66
        },
        "uplinkID":"d09715cc-4e10-4bcb-8031-7f3035eb660a"
      },
      {
        "gatewayID":"a840411ef5b04150",
        "time":"2023-07-26T03:51:42.839438Z",
        "rssi":-48,
        "loRaSNR":10,
        "location":{
          "longitude":108.15205,
          "latitude":16.07482,
          "altitude":10
        },
        "uplinkID":"d9d0dbfd-165b-4c5a-bc0a-c5768509069b"
      }
    ],
    "txInfo":{
      "frequency":923100000,
      "loRaModulationInfo":{
        "bandwidth":0,
        "spreadingFactor":0,
        "codeRate":"String"
      }
    },
    "fCnt":11001,
    "fPort":1,
    "data":"AWcBLAJoeAMCAU8EZQNh",
    "objectJSON":{
      "Analog input":{
        "dataChannel":3,
        "value":3.35,
        "unit": "V"
      },
      "Humidity sensor":{
        "dataChannel":2,
        "value":60,
        "unit": "%"
      },
      "Illuminance sensor":{
        "dataChannel":4,
        "value":865,
        "unit": "lux"
      },
      "Temperature sensor":{
        "dataChannel":1,
        "value":30,
        "unit": "°C"
      }
    },
    "devAddr":"String",
    "confirmUplink":true,
    "__v":0
  }
}
```

Note that the `data` field is now an object and not an array containing 1 object.