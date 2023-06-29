import openhab_files_helper

def user_input():
    device_type = input("Enter device type : ")
    device_location = input("Enter device location : ")
    device_id = input("Enter device id : ")
    openhab_files_helper.add_new_device(device_type, device_location, device_id)


if __name__ == '__main__':
    user_input()
