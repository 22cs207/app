from flask import Flask, request, jsonify
from flask_cors import CORS
from ctransformers import AutoModelForCausalLM
import os
from pathlib import Path
import pandas as pd
import re

app = Flask(__name__)
CORS(app)

# Load the plant database
PLANT_DB = pd.read_csv('plant_database.csv')

def load_model():
    """Load the Mistral model from the HuggingFace cache"""
    model_path = str(Path.home() / '.cache' / 'huggingface' / 'hub' / 
                    'models--TheBloke--Mistral-7B-Instruct-v0.1-GGUF' / 'snapshots' /
                    '731a9fc8f06f5f5e2db8a0cf9d256197eb6e05d1' / 
                    'mistral-7b-instruct-v0.1.Q2_K.gguf')
    
    if not os.path.exists(model_path):
        raise Exception("Model not found in HuggingFace cache. Please ensure the model is downloaded.")
    
    print(f"Loading model from: {model_path}")
    
    try:
        # First try loading with CPU optimizations
        return AutoModelForCausalLM.from_pretrained(
            model_path,
            model_type='mistral',
            max_new_tokens=512,
            temperature=0.7,
            gpu_layers=0,    # CPU only mode
            context_length=2048,
            batch_size=8,
            threads=12,      # Increased CPU threads for better performance
            lib='avx2'      # CPU optimization (can also try 'avx' or 'basic' if this fails)
        )
    except Exception as e:
        print(f"Error with optimized settings: {e}")
        print("Falling back to basic configuration...")
        # Fallback to basic configuration
        return AutoModelForCausalLM.from_pretrained(
            model_path,
            model_type='mistral',
            max_new_tokens=512,
            temperature=0.7,
            gpu_layers=0,
            threads=4,
            lib='basic'
        )

def extract_entities(text):
    """Ask Mistral to identify plant names and diseases/conditions from the input"""
    prompt = f"""<s>[INST] Extract any plant names and health conditions/diseases mentioned in the following text. 
    Format the response as JSON with 'plants' and 'conditions' lists. Text: "{text}" [/INST]"""
    
    response = model(prompt)
    
    # Use regex to find lists in the response
    plants = re.findall(r'"plants":\s*\[(.*?)\]', response, re.DOTALL)
    conditions = re.findall(r'"conditions":\s*\[(.*?)\]', response, re.DOTALL)
    
    # Clean up and split the matches
    plants = [p.strip(' "\'') for p in plants[0].split(',')] if plants else []
    conditions = [c.strip(' "\'') for c in conditions[0].split(',')] if conditions else []
    
    return plants, conditions

def get_plant_info(plant_name):
    """Look up plant information in the database"""
    plant = PLANT_DB[PLANT_DB['Plant Name'].str.lower() == plant_name.lower()]
    if not plant.empty:
        return plant.iloc[0].to_dict()
    return None

def generate_response(user_input, plants, conditions, plant_info):
    """Generate a comprehensive response using Mistral"""
    context = "Available information:\n"
    
    for plant in plants:
        if plant_info.get(plant):
            info = plant_info[plant]
            context += f"- {plant} ({info['Common Name']}): {info['Medicinal Properties']}. "
            context += f"Used for: {info['Treatment For']}. Side effects: {info['Side Effects']}\n"
    
    prompt = f"""<s>[INST] Using the following information, provide a helpful response about the plants and conditions mentioned. 
    Be specific about the medical properties and treatments, but also include a disclaimer about consulting healthcare professionals.
    
    User Question: {user_input}
    
    {context}
    [/INST]"""
    
    return model(prompt)

# Initialize the model
print("Initializing Mistral model...")
model = load_model()

@app.route('/chat', methods=['POST'])
def chat():
    try:
        print("Received chat request")
        data = request.json
        user_input = data.get('message', '')
        print(f"User input: {user_input}")
        
        if not user_input:
            return jsonify({'error': 'No message provided'}), 400
            
        # Add a loading message to the response
        response = {'status': 'processing'}
        
        # Ensure the response is flushed immediately
        response = jsonify(response)
        response.headers['X-Accel-Buffering'] = 'no'
        response.headers['Cache-Control'] = 'no-cache'

        # Extract plants and conditions from user input
        plants, conditions = extract_entities(user_input)
        
        # Look up information for each plant
        plant_info = {plant: get_plant_info(plant) for plant in plants}
        
        # Generate response using context
        response = generate_response(user_input, plants, conditions, plant_info)
        
        return jsonify({
            'response': response,
            'identified_plants': plants,
            'identified_conditions': conditions
        })
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)