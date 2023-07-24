# SupervisionControlDanang

This project aims to create a system to control and supervise the energy production of renewable energy sources.

## Production URL

[apps.vngalaxy.vn](https://apps.vngalaxy.vn)

## Physical Architecture

![Physical Architecture](./documentation/HRES%20schema.drawio.png)

## Software Architecture

![Software Architecture](./documentation/Software%20architecture.drawio.png)

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

| Folder name                                            | Is running in docker                                                    | Is automatically set up                                                          |
|--------------------------------------------------------|-------------------------------------------------------------------------|----------------------------------------------------------------------------------|
| [documentation](./documentation)                       | N/A                                                                     | N/A                                                                              |
| [fake_devices](./fake_devices)                         | No, run it manually [see README.md](fake_devices/README.md)             | N/A                                                                              |
| [grafana](./grafana)                                   | Yes, launched with the root docker-compose file                         | Yes                                                                              |
| [influxdb](./influxdb)                                 | Yes, launched with the root docker-compose file                         | No, see [influxdb/README.md](influxdb/README.md)                                 |
| [jenkins](./jenkins)                                   | Yes, in it's own docker-compose file                                    | No, see [jenkins/README.md](jenkins/README.md)                                   |
| [mosquitto](./mosquitto)                               | Yes, launched with the root docker-compose file                         | Yes                                                                              |
| [openhab](./openhab)                                   | Yes, launched with the root docker-compose file                         | Yes                                                                              |
| [openhab_config_generator](./openhab_config_generator) | No, run it manually [see README.md](openhab_config_generator/README.md) | No, see [openhab_config_generator/README.md](openhab_config_generator/README.md) |