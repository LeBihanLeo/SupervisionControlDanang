import subprocess

command = 'mosquitto_pub -h localhost -p 1883 -m "TA GUEULE THOMAS" -t topic_test/test2'

for _ in range(10):
    subprocess.call(command, shell=True)