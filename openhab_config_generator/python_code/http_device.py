from device import Device
import re

THINGS_FILE_PATH = f"../../openhab/conf/things/bearer-http.things"
ITEMS_FILE_PATH = f"../../openhab/conf/items/bearer-http.items"
PERSISTENCE_FILE_PATH = "../../openhab/conf/persistence/influxdb.persist"


class HttpDevice(Device):
    def __init__(self, device_type, device_location, device_id, bearer_token, channels_info):
        filename = "bearer-http"
        super().__init__(
            THINGS_FILE_PATH,
            ITEMS_FILE_PATH,
            PERSISTENCE_FILE_PATH,
            device_type,
            device_location,
            device_id
        )
        self.bearer_token = bearer_token
        self.channels_info = channels_info

    def transform_thing_file(self, input_data, device_name):
        input_data += f"Thing http:url:device_{device_name} \"{device_name}\" [\n" \
                      + "    baseURL=\"http://api.vngalaxy.vn/api/uplink/\",\n" \
                      + "    headers=\"WWW-Authenticate=Basic\",\n" \
                      + f"            \"Authorization=Bearer {self.bearer_token}\",\n" \
                      + "    stateMethod=\"POST\",\n" \
                      + "    refresh=15\n" \
                      + "] {\n" \
                      + "    Channels:\n"
        for channel_info in self.channels_info:
            channel_name = channel_info.get("name")
            json_path = channel_info.get("json_path")
            json_path = json_path.replace("\"", "\\\"") # Avoid error
            input_data += f"        Type number : {channel_name} \"{channel_name}\" [ stateTransformation=\"JSONPATH:{json_path}\" ]\n"
        input_data += "}\n\n"
        return input_data

    def transform_item_file(self, input_data, device_name):
        for channel_info in self.channels_info:
            channel_name = channel_info.get("name")
            input_data += f"\nNumber {self.get_device_name()} \"{self.get_device_name()}\" {{ channel=\"http:url:device_{device_name}:{channel_name}\", persistence=\"influxdb\" }}\n"
        return input_data


def user_input_channel_info(channels_info, device_type, device_location, device_id):
    channel_data_name = input("Enter channel data name : ")
    json_path = input("Enter json path : ")
    channel_info = {
        "name": f"{device_type}_{device_location}_{device_id}_{channel_data_name}_channel",
        "json_path": json_path
    }
    channels_info.append(channel_info)


def user_input_add_bearer_http_device():
    channels_info = []
    device_type = input("Enter device type : ")
    device_location = input("Enter device location : ")
    device_id = input("Enter device id : ")
    bearer_token = input("Enter bearer token : ")
    choice = "1"
    while choice == "1":
        user_input_channel_info(channels_info, device_type, device_location, device_id)
        choice = input("Add another channel (1), create device (2), cancel (0) : ")
    if choice == "2":
        http_device = HttpDevice(device_type, device_location, device_id, bearer_token, channels_info)
        http_device.generate_device()
    else:
        print("Cancel device creation")


def fetch_existing_devices():
    f = open(THINGS_FILE_PATH, "r")
    data = f.read()
    f.close()
    # fetch data using regex
    existing_devices = []
    founded_things = re.findall("Thing[^}]+}", data)
    for founded_thing in founded_things:
        device_info = {}
        thing_channels_type = re.findall("Type \w*", founded_thing)
        thing_channels_type = [str(device_channel).replace("Type ", "") for device_channel in thing_channels_type]
        thing_channels = re.findall("\w+_channel", founded_thing)
        split_channels = [str(channel).split("_") for channel in thing_channels]
        device_info["device_type"] = split_channels[0][0]
        device_info["device_location"] = split_channels[0][1]
        device_info["device_id"] = split_channels[0][2]
        device_info["data"] = [{"data_type": thing_channels_type[i], "data_name": split_channels[i][3]} for i in
                               range(len(thing_channels_type))]
        existing_devices.append(device_info)
    print(existing_devices)
