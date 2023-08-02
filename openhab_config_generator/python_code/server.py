from flask import Flask
from flask import request
from flask_cors import CORS

from devices import http_device
from devices import http_device_channel

app = Flask(__name__)
CORS(app)

@app.route('/')
def get_devices():
    return http_device.fetch_existing_devices()

@app.route("/add", methods=["POST"], strict_slashes=False)
def add_articles():
    channels = []
    for x in request.json['channels']:
        channel = http_device_channel.HttpDeviceChannel(x[0], x[1])
        channels.append(channel)
    
    device = http_device.HttpDevice(request.json['type'],request.json['location'],request.json['id'],request.json['bearer_token'],channels)
    device.generate_device()

    #print('type ' + request.json['type'])
    #print('id ' + request.json['id'])
    #print('location ' + request.json['location'])
    #print('token ' + request.json['bearer_token'])
    #print('channels ' + str(len(request.json['channels'])))
    #for x in request.json['channels']:
    #    for y in x:
    #        print(y)


    return 'ok'

if __name__ == '__main__':
    app.run()
