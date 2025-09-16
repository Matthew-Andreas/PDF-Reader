import pyttsx3
import PyPDF2
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET'])
def home():
    return jsonify({'message': 'Hello from Flask!'})


@app.route("/upload", methods=['POST'])
def pdfToAudio():
    file = request.files['pdfFile']
    return jsonify({'message': 'Hello from Flask!'})


if __name__ == "__main__":
    app.run(debug = True)