from flask import Flask, jsonify
from random import randint

app = Flask(__name__)

energy_type_list = ["solar_panel", "wind_turbin"]

def generate_data(energy_type):
    data = {'energy_type':f'{energy_type}','power':f'{randint(0,20)}'}
    return data

@app.route('/')
def get_values():
    data = {}
    for energy_type in energy_type_list:
        for energy_id in range(10):
            data.update({f'{energy_type}_{energy_id}':generate_data(energy_type)})
    return jsonify(data)



if __name__ == '__main__':
    app.run(port=5000)
