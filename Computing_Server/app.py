from flask import Flask, jsonify
import random

app = Flask(__name__)

@app.route('/api/example', methods=['GET'])
def get_value():
    data = {\
                "solar_panel_1":{\
                    "is_on": True,\
                    "power": 100,\
                    "voltage": random.randint(100, 200),\
                    "current": 100,\
                }\
            }
    return jsonify(data)

@app.route('/')
def index():
    return "<h1>Hello World!</h1>"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000, debug=False)
