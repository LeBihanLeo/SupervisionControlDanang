@echo off
setlocal enabledelayedexpansion

docker-compose down

docker-compose rm -f

for /r %%f in (*.Dockerfile) do (
  set "filepath=%%~dpf"
  set "filename=%%~nf"
  pushd "!filepath!"
  echo removing !filename!
  docker-compose rm -f !filename!
  popd
)