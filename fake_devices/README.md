# Fake devices

## Running

### Prerequisites

linux with packages : `python3`, `pip3`, `mosquitto-clients`

Then install requirements with `pip3 install -r requirements.txt`

### Usage

```bash
python3 mqtt_device_simulator.py
```

## Naming convention

| Code name | Meaning      |
|-----------|--------------|
| sp        | Solar panel  |
| wm        | Windmill     |

## Sent data

RegEx : `\{"power":\d+,"location":"\w+","timestamp":\d+\}`
