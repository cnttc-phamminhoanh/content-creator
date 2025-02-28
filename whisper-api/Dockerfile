FROM python:3.9-slim
WORKDIR /app
COPY requirements.txt .
RUN apt-get update && apt-get install -y ffmpeg && pip install --no-cache-dir -r requirements.txt && rm -rf /var/lib/apt/lists/*
EXPOSE 5001
CMD ["python", "whisper_api.py"]