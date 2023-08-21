import requests, json
from devices import http_device
from devices import http_device_channel
import re

def get_channels_with_bearer_token(bearer_token):
    headers = {
        "WWW-Authenticate": "Basic",
        "Authorization": f"Bearer {bearer_token}"
               }
    x = requests.post('http://api.vngalaxy.vn/api/uplink/', headers=headers)
    data = x.json()
    channel_json = data["data"][0]["objectJSON"]["data"]
    correct_keys = []

    # Get key that follow the json schema
    for channel_key in channel_json:
        if "value" in channel_json[channel_key]:
            correct_keys.append(channel_key)

    information_retrieved = [{"key": key, "json_path": f"$.data[0].objectJSON.data[\"{key}\"].value"} for key in correct_keys]
    return information_retrieved

res = get_channels_with_bearer_token("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXZFVUkiOiI5ODViOTRmMDEzODU5ZjEyIiwiYXBwSUQiOiIzIiwiaWF0IjoxNjkyNTkxNzI5fQ.txtjeI0UFMktFaEh_AbHO0swu-Ldov8Db3THpqVEQfI")
print(res)



# channels = re.findall("", data)