from flask import Flask, request, jsonify
from flask_cors import CORS
from ctransformers import AutoModelForCausalLM
import os
from pathlib import Path

app = Flask(__name__)
CORS(app)

def find_model():
    """Search for the Mistral model in common locations"""
    model_name = 'mistral-7b-instruct-v0.1.Q4_K_M.gguf'
    search_paths = [
        '.',  # Current directory
        str(Path.home() / 'Downloads'),  # Downloads folder
        os.path.dirname(os.path.abspath(__file__)),  # Script directory
    ]
    
    # Search in all potential locations
    for path in search_paths:
        model_path = os.path.join(path, model_name)
        if os.path.exists(model_path):
            print(f"Found model at: {model_path}")
            return model_path
    
    raise Exception(f"Could not find local model file '{model_name}'. Please ensure the model file is in one of these locations: {', '.join(search_paths)}")

# Initialize the Mistral model
model_path = find_model()
print(f"Loading model from: {model_path}")
model = AutoModelForCausalLM.from_pretrained(
    model_path,
    model_type='mistral',
    max_new_tokens=512,
    temperature=0.7,
    gpu_layers=0,  # Set to 0 to use CPU only, increase for GPU usage
    lib='avx2'     # CPU optimization, remove this line if you want to use GPU
)

@app.route('/chat', methods=['POST'])
def chat():
    try:
        data = request.json
        user_input = data.get('message', '')
        
        if not user_input:
            return jsonify({'error': 'No message provided'}), 400

        # Format the prompt for Mistral
        prompt = f"<s>[INST] {user_input} [/INST]"
        
        # Generate response
        response = model(prompt)
        
        return jsonify({'response': response})
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)