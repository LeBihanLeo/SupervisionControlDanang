FROM python:3.9

WORKDIR /app

COPY http_fake_api.py /app/http_fake_api.py

# Installation des dépendances, y compris Flask
RUN pip install flask

CMD ["python", "-m", "flask", "run", "--host=0.0.0.0", "--port=8000"]