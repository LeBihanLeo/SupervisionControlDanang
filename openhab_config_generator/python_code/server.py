from flask import Flask
from flask_cors import CORS

import http_device

app = Flask(__name__)
CORS(app)

@app.route('/')
def get_devices():
    return http_device.fetch_existing_devices()

    
if __name__ == '__main__':
    app.run()
