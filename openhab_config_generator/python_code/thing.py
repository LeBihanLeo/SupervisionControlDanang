import openhab_files_helper


class Thing:
    def __init__(self, things_file_path, item_file_path, persistence_file_path, device_type, device_location,
                 device_id):
        self.things_file_path = things_file_path,
        self.item_file_path = item_file_path,
        self.persistence_file_path = persistence_file_path,
        self.device_type = device_type,
        self.device_location = device_location,
        self.device_id = device_id
        print("Thing initialization...")


    def add_new_thing(self):
        f = open(self.things_file_path, "r")
        data = f.read()