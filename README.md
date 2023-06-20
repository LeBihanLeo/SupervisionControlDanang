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
## Setting up InfluxDB

When running the Docker Compose for the first time, InfluxDB may not be fully set up, requiring you to add the `openhab` bucket for storing data from OpenHab. 

Follow these steps to set it up:

1. Start the project by running the command specified in the [usage](#usage) section.
2. Once InfluxDB has started successfully,
3. Open Git Bash or WSL and execute the script located at `influxdb/init-influxdb.sh`