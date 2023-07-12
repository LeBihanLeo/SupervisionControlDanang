def write_in_file(filepath, data):
    f = open(filepath, "w")
    f.write(data)
    f.close()


def get_file_data(filepath):
    f = open(filepath, "r")
    data = f.read()
    f.close()
    return data