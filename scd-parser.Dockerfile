FROM python:3.9-slim

WORKDIR /app
# generate/update requirements.txt with command `pipreqs . --force`
# install pipreqs with command `pip install pipreqs`
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY parser/server.py .

CMD ["python", "server.py"]
