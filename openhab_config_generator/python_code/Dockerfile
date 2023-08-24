FROM python:3.10.9

WORKDIR /app

COPY app.py /app/app.py
COPY devices/ /app/devices/
COPY openhab_files_helper.py /app/openhab_files_helper.py
COPY file_helper.py /app/file_helper.py
COPY registered_devices.py /app/registered_devices.py

# Installation des dépendances, y compris Flask
RUN pip install flask
RUN pip install requests

CMD ["python", "-m", "flask", "run", "--host=0.0.0.0" , "--port=5000"]