from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def get_value():
    data = {"value": "10.0"}
    return jsonify(data)

if __name__ == '__main__':
    app.run(port=5000)
