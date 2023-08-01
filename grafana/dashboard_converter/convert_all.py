import dashboard_converter
import os

if __name__ == "__main__":
    input_folder = "..\\dashboards"

    for file in os.listdir(input_folder):
        input_file_path = os.path.join(input_folder, file)
        output_file_path = os.path.join("..\\dashboards_(manual_import)", f"{file[:-5]}_converted.json")
        dashboard_converter.run(input_file_path, output_file_path)
