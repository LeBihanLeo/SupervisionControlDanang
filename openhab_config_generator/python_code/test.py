import requests, json

headers = {
    "WWW-Authenticate": "Basic",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXZFVUkiOiI2MjdkMmVjOWNhZDgxN2EyIiwiYXBwSUQiOiIzIiwiaWF0IjoxNjkwMjU3ODMxfQ.Y6xHXYVR49J04nLpID7wr9ahtlz4Te0ynbB7tt7fwAY"
           }
x = requests.post('http://api.vngalaxy.vn/api/uplink/', headers=headers)

print(x.json())