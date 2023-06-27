import subprocess
from threading import Thread
import random
import json
import time

commandStart = 'mosquitto_pub -h localhost -p 1883 -m "' 
commandEnd = '" -u test -P test'

names = ["sp", "wm"]

numberOfThreads = 10

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

def device(i, name):
    print(name + " device " + str(i) + " start")
    value = 50
    for j in range (3600):
        value = newValue(value)
        x = gen_str(i, value)
        y = json.loads(x)
        command = commandStart + x + commandEnd + ' -t ' + y["location"] +'/' + name + str(i+1)
        print(command)
        subprocess.call(command, shell=True)
        time.sleep(1)


for i in range(numberOfThreads):
    mon_thread = Thread(target=device, args=(i, names[i%len(names)]))
    mon_thread.start()
