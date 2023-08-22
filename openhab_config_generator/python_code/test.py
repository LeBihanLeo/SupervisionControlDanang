import requests, json
from devices import http_device
from devices import http_device_channel
import re

res = http_device.is_existing_device("pmSensor","smartbuilding","1")
print(res)