import json_consts
import utils


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


def run(input_path, output_path):
    input_data = utils.get_json_from_file(input_path)
    converted_data = convert_dashboard(input_data)
    utils.write_json_to_file(converted_data, output_path)


if __name__ == "__main__":
    import argparse
    import sys
    import os

    parser = argparse.ArgumentParser(description="Convert dashboard data.")
    parser.add_argument("input_file", metavar="input_file_path", type=str, nargs="?",
                        help="Path to the input file.")
    parser.add_argument("output_file", metavar="output_file_path", type=str, nargs="?",
                        help="Path to the output file.")
    args = parser.parse_args()

    input_file_path = args.input_file
    output_file_path = args.output_file

    if not input_file_path or not output_file_path:
        input_file_path = input("Enter the file path: ")
        output_file_path = input("Enter the output file path: ")

    # Check if the input file exists before reading it
    if not os.path.isfile(input_file_path):
        print(f"Error: Input file '{os.path.abspath(input_file_path)}' does not exist.")
        sys.exit(1)

    run(input_file_path, output_file_path)
