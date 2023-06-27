import re

THINGS_FILE_PATH = "../openhab/conf/things/test-broker.things"
ITEMS_FILE_PATH = "../openhab/conf/items/test-broker.items"
THING_NAME = "mqtt_thing_data"
THING_HEADER = "Bridge mqtt:broker:mosquitto [ host=\"mqtt\", port=8883,  secure=false, username=\"admin\", password=\"admin123\" ] {"


def add_new_device(device_type, device_location, device_id):
    print("e")

def add_new_thing(device_name, device_topic):
    f = open(THINGS_FILE_PATH, "r")
    data = f.read()
    data = re.split("\s*}\s*}$", data)
    data = data[0]\
           + "\n\n"\
           + f"            Type number : {device_name} \"{device_name} channel\" [ stateTopic=\"{device_topic}\", transformationPattern=\"JSONPATH:$.power\" ]\n" \
           + f"            Type string : {device_name} \"{device_name} channel\" [ stateTopic=\"{device_topic}\", transformationPattern=\"JSONPATH:$.location\" ]\n" \
           + f"            Type number : {device_name} \"{device_name} channel\" [ stateTopic=\"{device_topic}\", transformationPattern=\"JSONPATH:$.timestamp\" ]\n" \
           + "    }\n}"
    print(data)

add_new_thing("sp_test","sptest/test")