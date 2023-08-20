# SupervisionControlDanang

This project aims to create a system to control and supervise the energy production of renewable energy sources.

## Table of Contents

- [SupervisionControlDanang](#supervisioncontroldanang)
  - [Table of Contents](#table-of-contents)
  - [URL of the online tools and services of the project](#url-of-the-online-tools-and-services-of-the-project)
  - [Software Architecture](#software-architecture)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Usage](#usage)
      - [How to run the project](#how-to-run-the-project)
  - [FAQ](#faq)
  - [Submodules and different parts of the project](#submodules-and-different-parts-of-the-project)
    - [Main project](#main-project)
    - [Device configuration generator](#device-configuration-generator)
    - [Continuous integration](#continuous-integration)
    - [Non runnable folders](#non-runnable-folders)

## URL of the online tools and services of the project

[apps.vngalaxy.vn](https://apps.vngalaxy.vn)

## Software Architecture

![Software Architecture](./documentation/schemas/Software%20architecture-HRES%20software%20architecture.drawio.svg)

## Getting Started

[Documentation folder : `documentation/`](./documentation/README.md)

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

> **Warning**  
> Launch the project with `docker compose` and not `docker-compose` this allows openHAB to start properly

```bash
docker compose up -d
```

## FAQ

You can see the Frequently Asqued Questions [here  (./documentation/FAQ.md)](./documentation/FAQ.md)

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

| Subfolder                                                         | Is running in docker                                                                | Is automatically set up    |
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
