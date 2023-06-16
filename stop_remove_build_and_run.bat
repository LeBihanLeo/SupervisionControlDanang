call stop_remove.bat

docker-compose pull

for /r %%f in (*.Dockerfile) do (
  set "filepath=%%~dpf"
  set "filename=%%~nf"
  pushd "!filepath!"
  echo building !filename!
  docker build -f "%%f" -t !filename! .
  popd
)

docker-compose up --build -d
