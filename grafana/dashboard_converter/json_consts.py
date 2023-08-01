import json

import json

def get_inputs():
    json_str = '''
    {
        "__inputs": [
            {
                "name": "DS_INFLUXDB",
                "label": "InfluxDB",
                "description": "",
                "type": "datasource",
                "pluginId": "influxdb",
                "pluginName": "InfluxDB"
            }
        ]
    }
    '''

    return json.loads(json_str)

if __name__ == "__main__":
  print(get_inputs())