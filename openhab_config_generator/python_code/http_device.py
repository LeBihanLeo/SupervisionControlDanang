from device import Device

class HttpDevice(Device):

    def __init__(self, device_type, device_location, device_id, bearer_token, ):
        filename = "bearer-http"
        Device.__init__(
            self,
            f"../openhab/conf/things/{filename}.things",
            f"../openhab/conf/items/{filename}.items",
            "../openhab/conf/persistence/influxdb.persist",
            device_type,
            device_location,
            device_id
        )
        self.bearer_token = bearer_token

    def transform_thing_file(self, input_data):
        input_data = input_data \
                     + "Thing http:url:device [\n" \
                     + "    baseURL=\"http://api.vngalaxy.vn/api/uplink/\",\n" \
                     + "    headers=\"WWW-Authenticate=Basic\",\n" \
                     + f"    \"Authorization=Bearer {self.bearer_token}\",\n" \
                     + "    stateMethod=\"POST\",\n" \
                     + "    refresh=15\n" \
                     + "] {\n" \
                     + "    Channels:\n" \
                     + "    Type string : customChannel1 \"My Custom Channel\"\n" \
                     + "}"

    def transform_item_file(self, input_data):
        input_data = input_data + ""

