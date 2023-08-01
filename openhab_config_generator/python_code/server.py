from flask import Flask
from flask import request
from flask_cors import CORS

from devices import http_device

app = Flask(__name__)
CORS(app)

@app.route('/')
def get_devices():
    return http_device.fetch_existing_devices()

@app.route("/add", methods=["POST"], strict_slashes=False)
def add_articles():
    print('test')
    la	= request.json['title']
    print(str(la))
    print('test')
    return la

if __name__ == '__main__':
    app.run()
