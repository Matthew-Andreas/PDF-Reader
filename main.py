import pyttsx3
import PyPDF2
from flask import Flask, request, jsonify, send_file
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET'])
def home():
    return jsonify({'message': 'Hello from Flask!'})


@app.route("/upload", methods=['POST'])
def pdfToAudio():
    reader = pyttsx3.init()

    file = request.files['pdfFile']
    pdfReader = PyPDF2.PdfReader(file)
    text = ""
    for page in pdfReader.pages:
        text += page.extract_text()

    reader.save_to_file(text, 'book.mp3')
    reader.runAndWait()

    try:
        return send_file('book.mp3', mimetype='audio/mpeg')
    except FileNotFoundError:
        return "MP3 file not found", 404



if __name__ == "__main__":
    app.run(debug = True)