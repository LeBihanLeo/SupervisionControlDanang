FROM python:3.9

WORKDIR /app

COPY app.py /app/app.py

# Installation des dépendances, y compris Flask
RUN pip install flask

CMD ["python", "-m", "flask", "run", "--host=0.0.0.0", "--port=8000"]