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
When you docker compose up for the first time, influxdb will not be completely setup. You will need to add the `openhab` bucket to store data from Openhab. 

To setup it do the following : 

- first run the project (see [usage](#usage))
- when influxdb has started
- run the following script in Git Bash or WSL : `influxdb/init-influxdb.sh`