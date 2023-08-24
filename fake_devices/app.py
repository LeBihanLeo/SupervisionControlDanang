from flask import Flask, jsonify
import random

app = Flask(__name__)

# Simulated data for lights and air conditioning
def get_lights(floor, room):
    lights_id = f"lights_f{floor}_r{room}"
    state = random.randrange(2) # Simulated state ON/OFF
    consumption = 25 + 10 * floor if state else 0  # Simulated consumption in watts
    lights = {"id": lights_id, "consumption": consumption, "state": state}
    return lights

def get_air_conditioning(floor, room):
    ac_id = f"ac_f{floor}_r{room}"
    temperature = 25 + floor  # Simulated temperature in degrees
    state = random.randrange(2) # Simulated state ON/OFF
    consumption = 500 + 100 * floor if state else 0  # Simulated consumption in watts
    ac = {"id": ac_id, "consumption": consumption, "temperature": temperature, "state": state}
    return ac

# Route to handle GET requests for lights
@app.route("/f<int:floor>/r<int:room>/lights", methods=["GET"])
def lights_route(floor, room):
    lights = get_lights(floor, room)
    return jsonify(lights)

# Route to handle GET requests for air conditioning
@app.route("/f<int:floor>/r<int:room>/ac", methods=["GET"])
def air_conditioning_route(floor, room):
    ac = get_air_conditioning(floor, room)
    return jsonify(ac)

@app.route("/", methods=["GET"])
def index():
    return "200"

if __name__ == "__main__":
    app.run() # Host and Port are provided in the Dockerfile
