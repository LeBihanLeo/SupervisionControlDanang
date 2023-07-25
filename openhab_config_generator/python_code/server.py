from flask import Flask, jsonify
from flask_cors import CORS

import openhab_files_helper as ofh

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    devices = ofh.fetch_existing_devices()
    for existing_device in devices:
        existing_device_type = existing_device[0]
        existing_device_location = existing_device[1]
        existing_device_id = existing_device[2]


        
    my_str = jsonify(devices)
    print(my_str)
    return my_str

if __name__ == '__main__':
    app.run()
