import requests
from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/', methods=['POST','GET'])
def index():
    if request.method == 'POST':
        nombre = request.form.get('name')
        url = f'https://pokeapi.co/api/v2/pokemon/{nombre.lower()}'
        datos =  requests.get(url)
        if datos.status_code == 200:
            datos = datos.json()
            id = datos['id']
            imagen = datos['sprites']['front_default']
            nombre = datos['name']
            altura = datos['height']
            peso = datos['weight']
            tipo = [t['type']['name'] for t in datos['types']]
            tipo = tipo[0]
            print(tipo)
            return render_template('index.html', imagen = imagen,id = id, nombre = nombre, altura = altura, peso = peso, tipo = tipo)
        else:
            print('no se encontro el pokemon')
            
    return render_template('index.html')