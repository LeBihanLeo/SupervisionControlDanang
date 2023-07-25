# SupervisionControlDanang

This project aims to create a system to control and supervise the energy production of renewable energy sources.

## Production URL

[apps.vngalaxy.vn](https://apps.vngalaxy.vn)

## Physical Architecture

![Physical Architecture](./documentation/schemas/HRES%20schema.drawio.png)

## Software Architecture

![Software Architecture](./documentation/schemas/Software%20architecture.drawio.png)

## Getting Started

[Documentation folder : documentation/](./documentation)

### Prerequisites

Docker and docker-compose are required to run this project.
To change the configuration, see the individual readme files.

If you are using Windows, you will need to install WSL.

### Usage

#### How to run the project

On Windows to clean then run the project (keep the volumes)

```bash
stop_remove_build_and_run.bat
```

On Linux to run the project (in background)

```bash
docker-compose up -d
```

or fresh restart (clean, build, run)

```bash
docker-compose down ; docker compose up -d ; bash init.sh
```

## Submodules and different parts of the project

- Folder naming convention : `snake_case`

### Main project 

| Folder name                     | Is running in docker                                        | Is automatically set up                                                                               |
|---------------------------------|-------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|
| [fake_devices](./fake_devices)  | No, run it manually [see README.md](fake_devices/README.md) | N/A                                                                                                   |
| [grafana](./grafana)            | Yes, launched with the root docker-compose file             | No, see [grafana/README.md](grafana/README.md)                                                        |
| [influxdb](./influxdb)          | Yes, launched with the root docker-compose file             | No, see [influxdb/README.md](influxdb/README.md)                                                      |
| [mosquitto](./mosquitto)        | Yes, launched with the root docker-compose file             | Yes                                                                                                   |
| [nginx](./nginx)                | Yes, launched with the root docker-compose file             | Yes                                                                                                   |
| [openhab](./openhab)            | Yes, launched with the root docker-compose file             | No, add the floor plans, devices are added automatically : see [openhab/README.md](openhab/README.md) |
| [telegraf](./telegraf)          | Yes, launched with the root docker-compose file             | Yes                                                                                                   |

### Device configuration generator

Folder: [openhab_config_generator](./openhab_config_generator)

| Part                                                         | Is running in docker                                                                | Is automatically set up    |
|--------------------------------------------------------------|-------------------------------------------------------------------------------------|----------------------------|
| [backend](./openhab_config_generator/python_code)            | No, run it manually [see README.md](openhab_config_generator/python_code/README.md) | Yes if python is installed |
| [frontend](./openhab_config_generator/front-react-generator) | Work In Progress                                                                    | Work In Progress           |                                

### Continuous integration

| Folder name          | Is running in docker                  | Is automatically set up                         |
|----------------------|---------------------------------------|-------------------------------------------------|
| [jenkins](./jenkins) | Yes, in it's own docker-compose file  | No, see [jenkins/README.md](jenkins/README.md)  |


### Non runnable folders 

| Folder name                      | Description                                                                 |
|----------------------------------|-----------------------------------------------------------------------------|
| [certificates](./certificates)   | Contains the certificates for the HTTPS connection                          |
| [documentation](./documentation) | Contains all the documentation of the project                               |
| [resources](./resources)         | Contains all the resources of the project                                   |
| [server_config](./server_config) | Contains all the configuration files and documentation to set up the server |
