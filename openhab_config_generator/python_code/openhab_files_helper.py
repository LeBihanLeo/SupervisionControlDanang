import re

THINGS_FILE_PATH = "../openhab/conf/things/test-broker.things"
ITEMS_FILE_PATH = "../openhab/conf/items/test-broker.items"
PERSISTENCE_FILE_PATH = "../openhab/conf/persistence/influxdb.persist"
THING_NAME = "mqtt_thing_data"  # not used for the moment


def add_new_device(device_type, device_location, device_id):
    device_name = f"{device_type}_{device_location}_{device_id}"
    device_topic = f"{device_location}/{device_type}{device_id}"
    add_new_mqtt_thing(device_name, device_topic)
    add_new_mqtt_item(device_name)


def write_in_file(filepath, data):
    f = open(filepath, "w")
    f.write(data)
    f.close()


def add_new_mqtt_thing(device_name, device_topic):
    f = open(THINGS_FILE_PATH, "r")
    data = f.read()
    f.close()
    data = re.split("\s*}\s*}$", data)
    data = data[0] \
           + "\n\n" \
           + f"            Type number : {device_name}_power_channel \"{device_name} channel\" [ stateTopic=\"{device_topic}\", transformationPattern=\"JSONPATH:$.power\" ]\n" \
           + f"            Type string : {device_name}_location_channel \"{device_name} channel\" [ stateTopic=\"{device_topic}\", transformationPattern=\"JSONPATH:$.location\" ]\n" \
           + f"            Type number : {device_name}_timestamp_channel \"{device_name} channel\" [ stateTopic=\"{device_topic}\", transformationPattern=\"JSONPATH:$.timestamp\" ]\n" \
           + "    }\n}"
    write_in_file(THINGS_FILE_PATH, data)


def add_new_mqtt_item(device_name):
    f = open(ITEMS_FILE_PATH, "r")
    data = f.read()
    f.close()
    data = data \
           + "\n\n" \
           + "Number " + device_name + "_power \"" + device_name + " power\" { channel=\"mqtt:topic:mosquitto:topic_json_test:" + device_name + "_power_channel\", persistence=\"influxdb\" }\n" \
           + "String " + device_name + "_location \"" + device_name + " location\" { channel=\"mqtt:topic:mosquitto:topic_json_test:" + device_name + "_location_channel\", persistence=\"influxdb\" }\n" \
           + "Number " + device_name + "_timestamp \"" + device_name + " timestamp\" { channel=\"mqtt:topic:mosquitto:topic_json_test:" + device_name + "_timestamp_channel\", persistence=\"influxdb\" }"
    write_in_file(ITEMS_FILE_PATH, data)


def add_device_persistence(device_name):
    print()


def fetch_existing_devices():
    f = open(THINGS_FILE_PATH, "r")
    data = f.read()
    f.close()
    # fetch data using regex
    found_device_channels = re.findall("\w+_power_channel", data)
    found_devices = [str(device_channel).replace("_power_channel", "") for device_channel in found_device_channels]
    # split result
    result = [str(device).split("_") for device in found_devices]
    return result
