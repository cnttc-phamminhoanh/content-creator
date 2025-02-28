from flask import Flask, request, jsonify
import whisper
import uuid
import os

app = Flask(__name__)

model = whisper.load_model("base")

# Endpoint GET /
@app.route('/', methods=['GET'])
def index():
  return jsonify({"message": "Whisper Server OK!"}), 200

# Endpoint POST /transcribe
@app.route('/transcribe', methods=['POST'])
def transcribe():
  if 'file' not in request.files:
    return jsonify({ "error": "audio file is require" }), 400

  file = request.files['file']

  if file.filename == '':
    return jsonify({"error": "file name invalid"}), 400

  file_extension = os.path.splitext(file.filename)[1]
  temp_filename = f"{uuid.uuid4()}{file_extension}"
  temp_file = os.path.join("/tmp", temp_filename)
  file.save(temp_file)

  try:
    result = model.transcribe(temp_file)
    return jsonify({"text": result["text"]})
  except Exception as e:
    return jsonify({"error": f"error while converting voice: {str(e)}"}), 500

if __name__ == '__main__':
  app.run(host='0.0.0.0', port=5001)
