# openHAB config generator backend

### Start the tool
```bash
python3 generator.py
```
Then use the ui to create a custom device or visualize existing devices 

### How to create an openHAB config file for a device ?
1. Create a httpDevice object with corrects arguments
2. call generate methode to create the config file

<em>No error checking so be sur to enter correctly formatted data</em>

### Get channels automatically
1. Call http_device.get_channels_with_bearer_token(**bearer_token**)
2. Get information about fetched channel for the given bearer token

### What server.py is used for ?
Server.py is used by the react web interface to create and display devices