from device import Device

class HttpDevice(Device):

    def __init__(self, device_type, device_location, device_id, bearer_token, channels_info):
        filename = "bearer-http"
        super().__init__(
            f"../../openhab/conf/things/{filename}.things",
            f"../../openhab/conf/items/{filename}.items",
            "../../openhab/conf/persistence/influxdb.persist",
            device_type,
            device_location,
            device_id
        )
        self.bearer_token = bearer_token
        self.channels_info = channels_info

    def transform_thing_file(self, input_data):
        input_data += "Thing http:url:device [\n" \
                     + "    baseURL=\"http://api.vngalaxy.vn/api/uplink/\",\n" \
                     + "    headers=\"WWW-Authenticate=Basic\",\n" \
                     + f"            \"Authorization=Bearer {self.bearer_token}\",\n" \
                     + "    stateMethod=\"POST\",\n" \
                     + "    refresh=15\n" \
                     + "] {\n" \
                     + "    Channels:\n"
        for channel_info in self.channels_info:
            channel_data_type = channel_info.get("data_type")
            channel_name = channel_info.get("name") + "_channel"
            input_data += f"    Type {channel_data_type} : {channel_name} \"{channel_name}\"\n"
        input_data += "}\n\n"
        return input_data

    def transform_item_file(self, input_data):
        for channel_info in self.channels_info:
            channel_name = channel_info.get("name") + "_channel"
            input_data += f"String {self.get_device_name()} \"{self.get_device_name()}\" {{ channel=\"http:url:device:{channel_name}\", persistence=\"influxdb\" }}\n"
        input_data += "\n"
        return input_data

def user_input_channel_info(channels_info, device_type, device_location, device_id):
    channel_data_type = input("Enter channel data type [string / number] : ")
    if channel_data_type != "string" and channel_data_type != "number":
        print("Data type error...")
        return
    channel_data_name = input("Enter channel data name : ")
    channel_info = {"data_type": channel_data_type, "name": f"{device_type}_{device_location}_{device_id}_{channel_data_name}_channel"}
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