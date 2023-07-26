# Sensor details

Source : [GitHub:myDevicesIoT/cayenne-docs/docs/LORA.md](https://github.com/myDevicesIoT/cayenne-docs/blob/master/docs/LORA.md)

| Type               | IPSO | LPP | Hex | Data Size | Data Resolution per bit                                                                                       |
|--------------------|------|-----|-----|-----------|---------------------------------------------------------------------------------------------------------------|
| Digital Input      | 3200 | 0   | 0   | 1         | 1                                                                                                             |
| Digital Output     | 3201 | 1   | 1   | 1         | 1                                                                                                             |
| Analog Input       | 3202 | 2   | 2   | 2         | 0.01 Signed                                                                                                   |
| Analog Output      | 3203 | 3   | 3   | 2         | 0.01 Signed                                                                                                   |
| Illuminance Sensor | 3301 | 101 | 65  | 2         | 1 Lux Unsigned MSB                                                                                            |
| Presence Sensor    | 3302 | 102 | 66  | 1         | 1                                                                                                             |
| Temperature Sensor | 3303 | 103 | 67  | 2         | 0.1 °C Signed MSB                                                                                             |
| Humidity Sensor    | 3304 | 104 | 68  | 1         | 0.5 % Unsigned                                                                                                |
| Accelerometer      | 3313 | 113 | 71  | 6         | 0.001 G Signed MSB per axis                                                                                   |
| Barometer          | 3315 | 115 | 73  | 2         | 0.1 hPa Unsigned MSB                                                                                          |
| Gyrometer          | 3334 | 134 | 86  | 6         | 0.01 °/s Signed MSB per axis                                                                                  |
| GPS Location       | 3336 | 136 | 88  | 9         | Latitude : 0.0001 ° Signed MSB, <br/> Longitude : 0.0001 ° Signed MSB, <br/> Altitude : 0.01 meter Signed MSB |


## Needs 

- timestamp 
- location information
  - groups and subgroups
- device information
  - device name 
  - device sensors 
    - sensor name
    - sensor type
    - sensor unit
    - sensor value

device sensors has to follow the cayenne format

## Previous data format (JSON)

<!-- collapsable md in html -->

<details><summary>Temperature, Humidity, Luminosity device example</summary>

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
</details>

<details><summary>MP device example</summary>

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

</details>

## Propositions for a new API data format

- [I. No config, all data in every request](#i-no-config-all-data-in-every-request)
- [II. Using a config file and a running file](#ii-using-a-config-file-and-a-running-file)
- [III. No config, minimal data in every request](#iii-no-config-minimal-data-in-every-request)

### I. No config, all data in every request

pros: simple to implement  
cons: data redundancy, more data to send

<details><summary>Minimal JSON schema for validating data.</summary>

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
        "deviceName":{
          "type":"string"
        },
        "time":{
          "type":"string",
          "pattern":"^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}(.[0-9]{1,9})?Z$"
        },
        "groups":{
          "type":"string",
          "pattern":"^(?!\\/)(?!.*\\/$)[\\w_\\/\\-]*$"
        },
        "sensors":{
          "type":"array",
          "items":{
            "type":"object",
            "properties":{
              "sensorType":{
                "type":"string"
              },
              "dataChannel":{
                "type":"number"
              },
              "value":{
                "type":"number"
              },
              "unit":{
                "type":"string"
              }
            },
            "required":[
              "sensorType",
              "dataChannel",
              "value",
              "unit"
            ]
          }
        }
      },
      "required":[
        "devEUI",
        "deviceName",
        "time",
        "sensors",
        "groups"
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

</details>

<details><summary>Example json for Temperature, Humidity, Luminosity device</summary>

```json
{
  "err":0,
  "msg":"Get uplink data successfully",
  "data":{
    "_id":"64c09867600db3ad9ee288cd",
    "appID":"3",
    "devEUI":"627d2ec9cad817a2",
    "deviceName":"analog input,humidity, illuminance, temperature",
    "time":"2023-07-26T03:51:42.832844Z",
    "groups":"building_s/4th_floor/room_404",
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
    "sensors":[
      {
        "sensorType":"Analog input",
        "dataChannel":3,
        "value":3.35,
        "unit":"V"
      },
      {
        "sensorType":"Humidity sensor",
        "dataChannel":2,
        "value":60,
        "unit":"%"
      },
      {
        "sensorType":"Illuminance sensor",
        "dataChannel":4,
        "value":865,
        "unit":"lux"
      },
      {
        "sensorType":"Temperature sensor",
        "dataChannel":1,
        "value":30,
        "unit":"°C"
      }
    ],
    "devAddr":"String",
    "confirmUplink":true,
    "__v":0
  }
}
```
</details>

### II. Using a config file and a running file

pros: fewer data to send  
cons: more complex to implement because it needs huma intervention to ask for the config file first, but it is possible to generate this file with openhab_config_gen

<details><summary>Config file schema</summary>

```json
{
  "type":"object",
  "properties":{
    "deviceEUI":{
      "type":"string"
    },
    "token":{
      "type":"string"    
    },
    "deviceName":{
      "type":"string"
    },
    "groups":{
      "type":"string",
      "pattern":"^(?!\\/)(?!.*\\/$)[\\w_\\/\\-]*$"
    },
    "sensors":{
      "type":"array",
      "items":{
        "type":"object",
        "properties":{
          "sensorType":{
            "type":"string"
          },
          "dataChannel":{
            "type":"number"
          },
          "unit":{
            "type":"string"
          }
        },
        "required":[
          "sensorType",
          "dataChannel",
          "value"
        ]
      }
    }
  },
  "required":[
    "deviceEUI",
    "deviceName",
    "token",
    "sensors",
    "groups"
  ]
}
```

</details>

<details><summary>Data sent by API schema</summary>

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
        "sensors":{
          "type":"array",
          "items":{
            "type":"object",
            "properties":{
              "sensorType":{
                "type":"string"
              },
              "dataChannel":{
                "type":"number"
              },
              "value":{
                "type":"number"
              }
            },
            "required":[
              "sensorType",
              "dataChannel",
              "value"
            ]
          }
        }
      },
      "required":[
        "devEUI",
        "deviceName",
        "time",
        "sensors",
        "groups"
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

</details>

### III. No config, minimal data in every request

Data we need to input in openhab_config_gen:

- deviceEUI
- JWT token
- deviceName (optional ?)
- group (or subgroups) ex : "building_S/4th_floor/room_404"
- sensors
  - sensorType
  - dataChannel
  - unit

<details><summary>Data sent by API schema</summary>

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
        "sensors": {
          "type": "object",
          "additionalProperties": {
            "type": "object",
            "properties": {
              "dataChannel": {
                "type": "number"
              },
              "value": {
                "type": "number"
              }
            },
            "required": [
              "dataChannel",
              "value"
            ]
          }
        }

      },
      "required":[
        "devEUI",
        "time",
        "sensors"
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

</details>

<details><summary>Example API response JSON for Temperature, Humidity, Luminosity device</summary>

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
    "sensors":{
      "Analog input":{
        "dataChannel":3,
        "value":3.35
      },
      "Humidity sensor":{
        "dataChannel":2,
        "value":60
      },
      "Illuminance sensor":{
        "dataChannel":4,
        "value":865
      },
      "Temperature sensor":{
        "dataChannel":1,
        "value":30
      }
    },
    "devAddr":"String",
    "confirmUplink":true,
    "__v":0
  }
}
```

</details>