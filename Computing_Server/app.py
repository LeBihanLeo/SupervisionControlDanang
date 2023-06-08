from apscheduler.schedulers.background import BackgroundScheduler
from flask import Flask, jsonify
import random

app = Flask(__name__)
data = ""
def make_request():
    #url = 'https://api.example.com'  # Replace with your server URL
    #response = requests.get(url)
    #data = response.json()
    global data
    data += "some data"
    print(data)  # Display the result in the console

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
    return "<h1>Hello World!</h1>" + data

if __name__ == '__main__':
    scheduler = BackgroundScheduler()
    scheduler.add_job(func=make_request, trigger='interval', seconds=3)
    scheduler.start()
    # http://localhost:5000 or http://localhost:8000 on docker
    app.run(debug=False)
