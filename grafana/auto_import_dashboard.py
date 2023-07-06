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
print("api_response", api_response)
api_key = api_response.json().get("key")
print(api_key)
""""

dashboard_path = "Panel_json/Windwill.json"

with open(dashboard_path, 'r') as f:
    dashboard_json = json.load(f)

response = requests.post(api_url, headers=headers, json=dashboard_json)

if response.status_code == 200:
    print('Dashboard imported successfully.')
else:
    print('Failed to import dashboard. Response:', response.text)
"""