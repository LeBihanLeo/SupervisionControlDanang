import openhab_files_helper
import abc
import file_helper


class Device:
    def __init__(self, thing_file_path, item_file_path, persistence_file_path, device_type, device_location,
                 device_id):
        self.thing_file_path = thing_file_path
        self.item_file_path = item_file_path
        self.persistence_file_path = persistence_file_path
        self.device_type = device_type
        self.device_location = device_location
        self.device_id = device_id
        print("Thing initialization...")

    def get_device_name(self):
        return f"{self.device_type}_{self.device_location}_{self.device_id}"

    def generate_device(self):
        self.add_new_thing()
        self.add_new_item()
        print(f"device {self.get_device_name()} generated")

    def add_new_thing(self):
        data = file_helper.get_file_data(self.thing_file_path)
        result_data = self.transform_thing_file(data, self.get_device_name())
        file_helper.write_in_file(self.thing_file_path, result_data)

    def add_new_item(self):
        data = file_helper.get_file_data(self.item_file_path)
        result_data = self.transform_item_file(data)
        file_helper.write_in_file(self.item_file_path, result_data)

    @abc.abstractmethod
    def transform_thing_file(self, input_data, device_name):
        return input_data

    @abc.abstractmethod
    def transform_item_file(self, input_data):
        return input_data