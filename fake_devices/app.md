# Smart Building Control API

This is a simple Flask-based API for controlling lights and air conditioning in a smart building. It provides endpoints to get information about lights and air conditioning systems in different rooms of the building.

## Getting Started

To use the Smart Building Control API, make sure you have [Flask](https://flask.palletsprojects.com/) installed. You can run the application using the provided Dockerfile.

## Endpoints

### Get Lights Information

Endpoint: `/f<int:floor>/r<int:room>/lights` (HTTP GET)

Retrieve information about the lights in a specific room.

**Parameters:**
- `floor` (integer): The floor number of the room.
- `room` (integer): The room number on the specified floor.

**Response:**
```json
{
    "id": "lights_f<floor>_r<room>",
    "consumption": <consumption_in_watts>,
    "state": <0_or_1>
}
```

### Get Air Conditioning Information

Endpoint: `/f<int:floor>/r<int:room>/ac` (HTTP GET)

Retrieve information about the air conditioning system in a specific room.

**Parameters:**
- `floor` (integer): The floor number of the room.
- `room` (integer): The room number on the specified floor.

**Response:**
```json
{
    "id": "ac_f<floor>_r<room>",
    "consumption": <consumption_in_watts>,
    "temperature": <temperature_in_degrees>,
    "state": <0_or_1>
}
```

### Get Index

Endpoint: `/` (HTTP GET)

A simple endpoint to check if the API is up and running.

**Response:**
```
200
```

## Example

To retrieve information about lights in floor 2, room 5:
```
GET /f2/r5/lights
```

Response:
```json
{
    "id": "lights_f2_r5",
    "consumption": 45,
    "state": 1
}
```

## Usage

1. Make sure you have Flask installed: `pip install Flask`
2. Run the application using the provided Dockerfile.

## Note

This API contains simulated data for demonstration purposes and doesn't control real devices.