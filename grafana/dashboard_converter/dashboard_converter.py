import utils
import json_consts
import json
DEBUG = False

def replace_datasource(json_object):
    for key, value in json_object.items():
        if key == "datasource":
            json_object[key] = "${DS_INFLUXDB}"
        elif isinstance(value, dict):
            replace_datasource(value)
        elif isinstance(value, list):
            for item in value:
                if isinstance(item, dict):
                    replace_datasource(item)


def convert_dashboard(json_object):
    json_object["__inputs"] = json_consts.get_inputs()["__inputs"]

    if "uid" in json_object:
        del json_object["uid"]

    replace_datasource(json_object)

    return json_object


if __name__ == "__main__":
    import sys

    input_file_path = ""
    output_file_path = ""

    if len(sys.argv) < 3:
        input_file_path = input("Enter the file path: ")
        output_file_path = input("Enter the output file path: ")
    else:
        input_file_path = sys.argv[1]
        output_file_path = sys.argv[2]

    file_content = utils.get_json_from_file(input_file_path);
    converted_json = convert_dashboard(file_content)

    if DEBUG:
        print(json.dumps(converted_json, indent=4))

    utils.write_json_to_file(converted_json, output_file_path)

