FROM python:3.9

WORKDIR /app

COPY http_fake_api.py /app/http_fake_api.py

# Installation des dépendances, y compris Flask
RUN pip install flask

CMD ["python", "./http_fake_api.py"]
EXPOSE 5000