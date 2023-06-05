from flask import Flask, jsonify
import random

app = Flask(__name__)

energy_type_list = ["solar_panel", "wind_turbin"]

def generate_data(energy_type):
    data = {'energy_type':f'{energy_type}','power':f'{random.randint(0,20)}'}
    return data

@app.route('/')
def get_values():
    data = {}
    for energy_type in energy_type_list:
        for energy_id in range(10):
            data.update({f'{energy_type}_{energy_id}':generate_data(energy_type)})
    return jsonify(data)

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
