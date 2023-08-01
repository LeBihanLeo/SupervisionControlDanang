from flask import Flask, jsonify
import random

app = Flask(__name__)

# Simulated data for lights and air conditioning
def get_lights(etage, salle):
    lights_id = f"lights_f{etage}_r{salle}"
    state = random.randrange(2) # Simulated state ON/OFF
    consumption =  25 + 10 * etage if state else 0  # Simulated consumption in watts
    lights = {"id": lights_id, "consumption": consumption, "state": state}
    return lights

def get_air_conditioning(etage, salle):
    ac_id = f"ac_f{etage}_r{salle}"
    consumption = 500 + 100 * etage  # Simulated consumption in watts
    temperature = 25 + etage  # Simulated temperature in degrees
    ac = {"id": ac_id, "consumption": consumption, "temperature": temperature}
    return ac

# Route to handle GET requests for lights
@app.route("/f<int:etage>/r<int:salle>/lights", methods=["GET"])
def lights_route(etage, salle):
    lights = get_lights(etage, salle)
    return jsonify(lights)

# Route to handle GET requests for air conditioning
@app.route("/f<int:etage>/r<int:salle>/ac", methods=["GET"])
def air_conditioning_route(etage, salle):
    ac = get_air_conditioning(etage, salle)
    return jsonify(ac)

if __name__ == "__main__":
    app.run()
