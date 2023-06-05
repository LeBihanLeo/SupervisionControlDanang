from flask import Flask, jsonify
import random

app = Flask(__name__)

@app.route('/example', methods=['GET'])
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

if __name__ == '__main__':
    app.run(port=5000)
