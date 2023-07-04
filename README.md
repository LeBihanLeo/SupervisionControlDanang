# SupervisionControlDanang

This project aims to create a system to control and supervise the energy production of renewable energy sources.

## Physical Architecture

![Physical Architecture](./documentation/HRES%20schema.drawio.png)

## Software Architecture

![Software Architecture](./documentation/Software%20Architecture.drawio.png)

Other documentation can be found in the [documentation](./documentation) folder.

## Getting Started

### Prerequisites

Docker and docker-compose are required to run this project.

If you are using Windows, you will need to install WSL.

### Usage

#### Run in dev mode

On Windows to clean then run the project

```bash
stop_remove_build_and_run.bat
```

On Linux to run the project (in background)

```bash
docker-compose up -d
```

## submodules / different parts of the project

- Folder naming convention : `snake_case`

| Folder name   | Description                                   | is running in docker                             | Language | is automatically set up                                  |
|---------------|-----------------------------------------------|--------------------------------------------------|----------|----------------------------------------------------------|
| Documentation | Contains all the documentation of the project | N/A                                              | N/A      | N/A                                                      |
| fake_devices  | Contains the code for the fake devices        | No                                               | Python   | No, see [fake_devices/README.md](fake_devices/README.md) |
| grafana       |                                               | Yes, launched with the root docker-compose file  | N/A      | No, see [grafana/README.md](grafana/README.md)           |
| influxdb      |                                               | Yes, launched with the root docker-compose file  | N/A      | No, see [influxdb/README.md](influxdb/README.md)         |
