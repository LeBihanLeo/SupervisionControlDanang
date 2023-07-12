import subprocess
from threading import Thread
import random
import json
import time

commandStart = 'mosquitto_pub -h localhost -p 1883 -m "' 
commandEnd = '" -u test -P test'

names = ["sp", "wm"]

numberOfThreads = 10
rangeNumber = 3600

def gen_str(i, value):
    x =  '{"power":'+ str(newValue(value)) + ',"location":"l'+ str(i%2+1) +'","timestamp":'+ str(time.time()) +'}'
    return x

def newValue(value):
    value = value + random.randint(-10, 10)
    if(value<0):
        value = 0
    elif(value > 100):
        value = 100
    return value

def send_command(i, x, name):
    y = json.loads(x)
    command = commandStart + x + commandEnd + ' -t ' + y["location"] +'/' + name + str(i+1)
    print(command)
    subprocess.call(command, shell=True)
    time.sleep(1)

def device(i, name):
    print(name + " device " + str(i) + " start")
    value = 50
    for j in range (rangeNumber):
        value = newValue(value)
        x = gen_str(i, value)
        send_command(i, x, name)

def launch_house():
    print("launch house")
    value = newValue(50) * 5
    for j in range (rangeNumber):
        value = newValue(value/5) * 5
        x = '{"power":'+ str(value) + ',"location":"l3","timestamp":'+ str(time.time()) +'}'
        send_command(0, x, "h")

for i in range(numberOfThreads):
    mon_thread = Thread(target=device, args=(i, names[i%len(names)]))
    mon_thread.start()

mon_thread = Thread(target=launch_house, args=())
mon_thread.start()
