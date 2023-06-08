@echo off
setlocal enabledelayedexpansion

docker-compose down

Rem docker-compose rm -f

for %%f in (*.Dockerfile) do (
  set "filename=%%~nf"
  docker-compose rm -f !filename!
)

docker-compose pull

for %%f in (*.Dockerfile) do (
  set "filename=%%~nf"
  docker build -f "%%f" -t !filename! .
)

docker-compose up
