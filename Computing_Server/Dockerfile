FROM python:3.9-slim

WORKDIR /app
COPY * .
RUN pip install pipreqs
RUN pipreqs . --force
RUN pip install --no-cache-dir -r requirements.txt

CMD ["python", "-m", "flask", "run", "--host=0.0.0.0", "--port=8000"]