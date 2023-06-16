import subprocess
from threading import Thread
import random
import json

commandStart = 'mosquitto_pub -h localhost -p 1883 -m "' 
commandEnd = '" -u test -P test'

numberOfThreads = 5

def device(i, name):
    print(name + " device " + str(i) + " start")
    for j in range (10):
        command = commandStart + str(random.randint(1, 100)) + commandEnd + ' -t ' + name +str(i+1)+'/prod'
        subprocess.call(command, shell=True)

for i in range(numberOfThreads):
    mon_thread = Thread(target=device, args=(i, "sp"))
    mon_thread.start()
    mon_thread = Thread(target=device, args=(i, "wm"))
    mon_thread.start()
    
for i in range(numberOfThreads*2):  
    mon_thread.join()

print("threads finis.")