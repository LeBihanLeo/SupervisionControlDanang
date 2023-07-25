from flask import Flask, jsonify
from flask_cors import CORS

import openhab_files_helper as ofh

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    devices = ofh.fetch_existing_devices()
    my_str = jsonify(devices)
    print(my_str)
    return my_str

if __name__ == '__main__':
    app.run()
