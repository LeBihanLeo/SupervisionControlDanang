from apscheduler.schedulers.background import BackgroundScheduler
from flask import Flask, jsonify
import random
import pymongo

app = Flask(__name__)

console = ""

# backend functions

def get_sensor_data():
    return {
        "production": {
            "solar_panel_1": {"voltage": random.randint(50, 150)}
        },
        "demand": {"voltage": 100},
    }


def get_and_compute_sensor_data():
    global console
    data = get_sensor_data()

    total_production = 0
    for device in data["production"]:
        total_production += data["production"][device]["voltage"]

    total_demand = data["demand"]["voltage"]
    if total_production >= total_demand:
        res = f"We have a surplus of energy! (prod = {total_production}, demand = {data['demand']['voltage']})"
        print(res)
        console += res + "\n"
    else:
        res = f"We have a deficit of energy! (prod = {total_production}, demand = {data['demand']['voltage']})"
        print(res)
        console += res + "\n"

# Routes and web pages

@app.route('/api/example', methods=['GET'])
def get_value():
    data = {
        "solar_panel_1": {"is_on": True, "power": 100, "voltage": random.randint(100, 200), "current": 100, }
    }
    return jsonify(data)


@app.route('/')
def index():
    return "<h1>Hello World!</h1>" + "<p>Console:<p><p>" + console.replace("\n", "<br/>") + "</p>"


# Main
def main():
    # setup
    client = pymongo.MongoClient("mongodb://localhost:27017/")
    db = client["example"]
    collection = db["test_collection"]
    data = {"name": "John", "age": 30}
    collection.insert_one(data)
    #client.close()
    print("c'est ajouté !")

    scheduler = BackgroundScheduler()
    scheduler.add_job(func=get_and_compute_sensor_data, trigger='interval', seconds=3)

    # run
    scheduler.start()

if __name__ == '__main__':
    # http://localhost:5000 or http://localhost:8000 on docker via docker port forwarding
    app.run(debug=False, host='0.0.0.0', port=5000)

main()
