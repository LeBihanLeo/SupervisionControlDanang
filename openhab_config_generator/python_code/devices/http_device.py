from devices.device import Device
import re
from registered_devices import REGISTERED_DEVICES_CHANNEL_LIST
from devices.http_device_channel import HttpDeviceChannel
from file_helper import get_file_data, write_in_file

THINGS_FILE_PATH = f"../../openhab/conf/things/bearer-http.things"
ITEMS_FILE_PATH = f"../../openhab/conf/items/bearer-http.items"
PERSISTENCE_FILE_PATH = "../../openhab/conf/persistence/influxdb.persist"
FILENAME = "bearer-http"


class HttpDevice(Device):
    def __init__(self, device_type, device_location, device_id, bearer_token, device_channel_list):
        super().__init__(
            THINGS_FILE_PATH,
            ITEMS_FILE_PATH,
            PERSISTENCE_FILE_PATH,
            device_type,
            device_location,
            device_id
        )
        self.bearer_token = bearer_token
        self.device_channel_list = device_channel_list

    def transform_thing_file(self, input_data, device_name):
        input_data += f"Thing http:url:device_{device_name} \"{device_name}\" [\n" \
                      + "    baseURL=\"http://api.vngalaxy.vn/api/uplink/\",\n" \
                      + "    headers=\"WWW-Authenticate=Basic\",\n" \
                      + f"            \"Authorization=Bearer {self.bearer_token}\",\n" \
                      + "    stateMethod=\"POST\",\n" \
                      + "    refresh=15\n" \
                      + "] {\n" \
                      + "    Channels:\n"
        for device_channel in self.device_channel_list:
            channel_name = device_channel.getDeviceChannelFullName(self.device_type, self.device_location, self.device_id)
            json_path = device_channel.json_path
            input_data += f"        Type number : {channel_name} \"{channel_name}\" [ stateTransformation=\"JSONPATH:{json_path}\" ]\n"
        input_data += "}\n\n"
        return input_data

    def transform_item_file(self, input_data, device_name):
        for device_channel in self.device_channel_list:
            channel_name = device_channel.getDeviceChannelFullName(self.device_type, self.device_location, self.device_id)
            input_data += f"\nNumber {self.get_device_name()}_{device_channel.channel_name} \"{self.get_device_name()} {device_channel.channel_name}\" {{ channel=\"http:url:device_{device_name}:{channel_name}\", persistence=\"influxdb\" }}"
        input_data += "\n"
        return input_data

def delete_http_device(device_type, device_location, device_id):
    # delete in things file
    things_data = get_file_data(THINGS_FILE_PATH)
    things_result = re.sub(f"Thing http:url:device_{device_type}_{device_location}_{device_id} " + "[^}]+}\n", "", things_data)
    write_in_file(THINGS_FILE_PATH, things_result)
    #delete in items file
    items_data = get_file_data(ITEMS_FILE_PATH)
    items_result = re.sub(r"Number[^}]+" + f":device_{device_type}_{device_location}_{device_id}:" + r"[^}]+}\n", "", items_data)
    write_in_file(ITEMS_FILE_PATH, items_result)

def user_input_device_channel(channels_info):
    channel_data_name = input("Enter channel data name : ")
    json_path = input("Enter json path : ")
    device_channel = HttpDeviceChannel(channel_data_name, json_path)
    channels_info.append(device_channel)


def user_input_add_bearer_http_device():
    channels_info = []
    device_type = input("Enter device type : ")
    device_location = input("Enter device location : ")
    device_id = input("Enter device id : ")
    bearer_token = input("Enter bearer token : ")

    # get device preconfig choice
    choice = "1"
    device_config_choice = input("Custom device (1), temp hum lum device (2) : ")
    if int(device_config_choice) == 2:
        channels_info = REGISTERED_DEVICES_CHANNEL_LIST.get("temp_lum_hum")
        choice = "2"

    # channels input for custom devices
    while choice == "1":
        user_input_device_channel(channels_info)
        choice = input("Add another channel (1), create device (2), cancel (0) : ")
    if choice == "2":
        http_device = HttpDevice(device_type, device_location, device_id, bearer_token, channels_info)
        http_device.generate_device()
    else:
        print("Cancel device creation")

def fetch_existing_devices(filename, existing_device_list):
    data = get_file_data(f"../../openhab/conf/things/{filename}.things")
    # fetch data using regex
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
        existing_device_list.append(device_info)

def fetch_all_existing_devices():
    existing_device_list = []
    filenames = ["test-data", "bearer-http"]
    for filename in filenames:
        fetch_existing_devices(filename, existing_device_list)
    return existing_device_list