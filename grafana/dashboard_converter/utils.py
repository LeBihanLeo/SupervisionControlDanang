import json

DEBUG = False


def get_json_from_file(file_path, encoding="utf-8"):
    if DEBUG:
        import os
        print(f"Opening file {os.path.abspath(file_path)} with encoding {encoding}")
    try:
        file = open(file_path, "r", encoding=encoding)
    except FileNotFoundError:
        import os
        print(f"File {os.path.abspath(file_path)} not found")
        return None
    except json.JSONDecodeError:
        import os
        print(f"Error decoding JSON from {os.path.abspath(file_path)}")
        return None

    res = json.load(file)
    file.close()

    return res


def write_json_to_file(json_object, file_path):
    if DEBUG:
        import os
        print(f"Writing to file {os.path.abspath(file_path)}")
    try:
        with open(file_path, 'w') as file:
            json.dump(json_object, file, indent=4)
    except Exception as e:
        import os
        print(f"Error {e.args} when writing to file {os.path.abspath(file_path)}")
        return False
    return True
