REGISTERED_DEVICE_LIST = {
    "temp_lum_hum": {
        "humidity": "$.data[0].objectJSON.humiditySensor.2",
        "illuminance": "$.data[0].objectJSON.illuminanceSensor.4",
        "temperature": "$.data[0].objectJSON.temperatureSensor.1"
    }
}

def generate_registered_device_channel_info(registered_device_key):
    channels_info = []
    registered_device = REGISTERED_DEVICE_LIST.get(registered_device_key)
    for key in registered_device.keys():
        channel_info = {
            "name": key,
            "json_path": registered_device.get(key)
        }
        channels_info.append(channel_info)
    return channels_info