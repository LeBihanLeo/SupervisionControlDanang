# SupervisionControlDanang

This project aims to create a system to control and supervise the energy production of renewable energy sources.

## Physical Architecture

![Physical Architecture](./documentation/HRES%20schema.png)

## Getting Started

### Prerequisites

Docker and docker-compose are required to run this project.

### Usage

#### Run in dev mode

On Windows to clean then run the project

```bash
stop_remove_build_and_run.bat
```

On Linux to run the project

```bash
docker-compose up
```
## Setup influxdb
When you docker compose up for the first time, influxdb will not be completely setup. You will need to add the Openhab bucket to store data from Openhab. To setup it first run "docker compose up", then when influxdb is launched run the following script "influxdb/init-influxdb.sh"