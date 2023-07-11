from thing import Thing

class HttpThing(Thing):

    def __init__(self, device_type, device_location, device_id):
        filename = "bearer-http"
        Thing.__init__(
            self,
            f"../openhab/conf/things/{filename}.things",
            f"../openhab/conf/items/{filename}.items",
            "../openhab/conf/persistence/influxdb.persist",
            device_type,
            device_location,
            device_id
        )

