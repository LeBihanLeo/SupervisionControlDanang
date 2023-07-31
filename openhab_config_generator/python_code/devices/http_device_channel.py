class HttpDeviceChannel:

    def __init__(self, channel_name, json_path):
        self.channel_name = channel_name
        self.json_path = json_path.replace("\"", "\\\"")

    def getDeviceChannelFullName(self, device_type, device_location, device_id):
        return f"{device_type}_{device_location}_{device_id}_{self.channel_name}_channel"