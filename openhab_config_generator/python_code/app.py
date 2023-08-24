from flask import Flask
from flask import request
#from flask_cors import CORS

from devices import http_device
from devices import http_device_channel

app = Flask(__name__)
#CORS(app)

@app.route('/')
def get_devices():
    existing_device_list = []
    return http_device.fetch_all_existing_devices()

@app.route("/add", methods=["POST"], strict_slashes=False)
def add_device():
    channels = []
    for x in request.json['channels']:
        channel = http_device_channel.HttpDeviceChannel(x[0], x[1])
        channels.append(channel)
    
    device = http_device.HttpDevice(request.json['type'],request.json['location'],request.json['id'],request.json['bearer_token'],channels)
    device.generate_device()

    return "200"

@app.route("/remove", methods=["POST"], strict_slashes=False)
def remove_devices():
    print(request)
    http_device.delete_http_device(request.json['type'],request.json['loc'],request.json['id'])
    return "200"


@app.route("/getChannels", methods=["POST"], strict_slashes=False)
def get_channels_bt():
    print(request)
    response = http_device.get_channels_with_bearer_token(request.json['bearer_token'])
    return response


if __name__ == '__main__':
    app.run() # Host and Port are provided in the Dockerfile
