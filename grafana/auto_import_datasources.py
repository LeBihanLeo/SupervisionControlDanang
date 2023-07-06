import requests
import json
import base64
import random

api_url = f'https://localhost:3000/api/dashboards/db'

headers = {
    'Content-Type': 'application/json',
    "Authorization": "Basic " + base64.b64encode(b"admin:admin").decode("utf-8")
}

data = {
    "name":str(random.randint(1,100000)), # to generate random name everytime and prevent error
    "role": "Admin"
}
api_response = requests.post('https://localhost:3000/api/auth/keys', headers=headers, json=data, verify=False)
#print("api_response", api_response)
api_key = api_response.json().get("key")
#print(api_key)

# DOCKER_INFLUXDB_INIT_ADMIN_TOKEN from env file
DOCKER_INFLUXDB_INIT_ADMIN_TOKEN = "e969c124fb2c28db5220efa8f6b2498f2e0ea2609c31c51ecde9f24cff6c47bd"

data = {
    'name': 'InfluxDB',
    'type': 'influxdb',
    'access': 'proxy',
    'url': 'http://influxdb:8086',
    'database': 'openhab',
    'isDefault': True,
    'jsonData': {
        'organization': 'dniit',
        'token': DOCKER_INFLUXDB_INIT_ADMIN_TOKEN,
        'version': 1,
        'httpMode': 'GET',
        'database': 'openhab',
        'defaultRP': 'autogen',
        'queryLanguage': 'flux'
    }
}

response = requests.post(api_url, headers=headers, json=data, verify=False)

if response.status_code == 200:
    print('datasource imported successfully.')
else:
    print('Failed to import dashboard. Response:', response.text)
