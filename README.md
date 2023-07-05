# SupervisionControlDanang

This project aims to create a system to control and supervise the energy production of renewable energy sources.

## Physical Architecture

![Physical Architecture](./documentation/HRES%20schema.drawio.png)

## Software Architecture

![Software Architecture](./documentation/Software%20architecture.drawio.png)

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

| Folder name                      | Is running in docker                            | Is automatically set up                                  |
|----------------------------------|-------------------------------------------------|----------------------------------------------------------|
| [documentation](./documentation) | N/A                                             | N/A                                                      |
| [fake_devices](./fake_devices)   | No                                              | No, see [fake_devices/README.md](fake_devices/README.md) |
| [grafana](./grafana)             | Yes, launched with the root docker-compose file | No, see [grafana/README.md](grafana/README.md)           |
| [influxdb](./grafana)            | Yes, launched with the root docker-compose file | No, see [influxdb/README.md](influxdb/README.md)         |
| [mosquitto](./mosquitto)         | Yes, launched with the root docker-compose file | Yes                                                      |

