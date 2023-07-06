# SupervisionControlDanang

This project aims to create a system to control and supervise the energy production of renewable energy sources.
HEY

## Physical Architecture

![Physical Architecture](./documentation/HRES%20schema.drawio.png)

## Software Architecture

![Software Architecture](./documentation/Software%20architecture.drawio.png)

Other documentation can be found in the [documentation](./documentation) folder.

## Getting Started

### Prerequisites

Docker and docker-compose are required to run this project.
To change the configuration, see the individual readme files.

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

## Submodules / different parts of the project

- Folder naming convention : `snake_case`

| Folder name                                            | Is running in docker                                                    | Is automatically set up                                                          |
|--------------------------------------------------------|-------------------------------------------------------------------------|----------------------------------------------------------------------------------|
| [documentation](./documentation)                       | N/A                                                                     | N/A                                                                              |
| [fake_devices](./fake_devices)                         | No, run it manually [see README.md](fake_devices/README.md)             | N/A                                                                              |
| [grafana](./grafana)                                   | Yes, launched with the root docker-compose file                         | No, see [grafana/README.md](grafana/README.md)                                   |
| [influxdb](./grafana)                                  | Yes, launched with the root docker-compose file                         | No, see [influxdb/README.md](influxdb/README.md)                                 |
| [jenkins](./jenkins)                                   | Yes, in it's own docker-compose file                                    | ❗ Work in progress                                                               |
| [mosquitto](./mosquitto)                               | Yes, launched with the root docker-compose file                         | Yes                                                                              |
| [openhab](./openhab)                                   | Yes, launched with the root docker-compose file                         | No, see [openhab/README.md](openhab/README.md)                                   |
| [openhab_config_generator](./openhab_config_generator) | No, run it manually [see README.md](openhab_config_generator/README.md) | No, see [openhab_config_generator/README.md](openhab_config_generator/README.md) |
| [prometheus](./prometheus)                             | Yes, launched with the root docker-compose file                         | Yes                                                                              |                                    

