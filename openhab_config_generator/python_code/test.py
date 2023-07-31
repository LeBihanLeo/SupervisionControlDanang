import requests, json

headers = {
    "WWW-Authenticate": "Basic",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXZFVUkiOiJlYzJiYjA4ZmMyYzI0NjBiIiwiYXBwSUQiOiIzIiwiaWF0IjoxNjkwMTY5NzkxfQ.SMzyudo9nApyKqhiy0bdHaklmGffWfd3aSSlVZTpqh8"
           }
x = requests.post('http://api.vngalaxy.vn/api/uplink/', headers=headers)
res = json.load(x.text)

print(res)