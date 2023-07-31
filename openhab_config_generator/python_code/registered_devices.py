from devices.http_device_channel import HttpDeviceChannel

REGISTERED_DEVICES_CHANNEL_LIST = {
    "temp_lum_hum": [
        HttpDeviceChannel("humidity", "$.data[0].objectJSON.humiditySensor.2"),
        HttpDeviceChannel("illuminance", "$.data[0].objectJSON.illuminanceSensor.4"),
        HttpDeviceChannel("temperature", "$.data[0].objectJSON.temperatureSensor.1")
    ]
}