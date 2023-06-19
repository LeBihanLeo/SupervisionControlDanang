import subprocess
from threading import Thread
import random
import json
import time

commandStart = 'mosquitto_pub -h localhost -p 1883 -m "' 
commandEnd = '" -u test -P test'

names = ["sp", "wm"]

numberOfThreads = 10


def device(i, name):
    print(name + " device " + str(i) + " start")
    for j in range (3600):
        command = commandStart + str(random.randint(1, 100)) + commandEnd + ' -t ' + name +str(i+1)+'/prod'
        subprocess.call(command, shell=True)
        time.sleep(1)


for i in range(numberOfThreads):
    mon_thread = Thread(target=device, args=(i, names[i%len(names)]))
    mon_thread.start()
