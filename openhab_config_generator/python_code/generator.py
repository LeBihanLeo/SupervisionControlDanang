import openhab_files_helper as ofh
from devices import http_device

THINGS_FILE_PATH = "../openhab/conf/things/test-broker.things"
ITEMS_FILE_PATH = "../openhab/conf/items/test-broker.items"
PERSISTENCE_FILE_PATH = "../openhab/conf/persistence/influxdb.persist"

# Check if the given device is already used in openhab files
def check_redundancy(device_type, device_location, device_id):
    existing_devices = ofh.fetch_existing_devices()
    for existing_device in existing_devices:
        existing_device_type = existing_device[0]
        existing_device_location = existing_device[1]
        existing_device_id = existing_device[2]
        if existing_device_type == device_type and existing_device_location == device_location and existing_device_id == device_id:
            return True
    return False


def user_input_add_device():
    device_type = input("Enter device type : ")
    device_location = input("Enter device location : ")
    device_id = input("Enter device id : ")
    if check_redundancy(device_type, device_location, device_id):
        print("Error : Given device information already exists")
        return
    ofh.add_new_device(device_type, device_location, device_id)


def fetch_existing_data():
    existing_devices = ofh.fetch_existing_devices()
    print("Device list :\n")
    for existing_device in existing_devices:
        existing_device_type = existing_device[0]
        existing_device_location = existing_device[1]
        existing_device_id = existing_device[2]
        print("   Type : " + existing_device_type)
        print("   Location : " + existing_device_location)
        print("   Id : " + existing_device_id + "\n")


# Ask user choice in command line
def user_input():
    while True:
        print("Select your choice or write close\n"
              " 1 - Add a new http bearer device\n"
              " 2 - List existing devices\n")
        choice = input("    > ")
        if choice == "close":
            return
        elif choice == "1":
            http_device.user_input_add_bearer_http_device()
        elif choice == "2":
            print(http_device.fetch_all_existing_devices())
        else:
            print("Input error, try again")


if __name__ == '__main__':
    user_input()
