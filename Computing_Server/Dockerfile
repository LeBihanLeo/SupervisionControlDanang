FROM python:3.9-slim

WORKDIR /app
# generate/update requirements.txt with command `pipreqs . --force`
# install pipreqs with command `pip install pipreqs`
COPY * .
RUN pip install --no-cache-dir -r requirements.txt

CMD ["python", "-m", "flask", "run", "--host=0.0.0.0", "--port=8000"]