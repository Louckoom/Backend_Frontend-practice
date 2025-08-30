from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask (__name__)
CORS(app)

Project_infos = [
    
    {

    'id':'1',
    'titre':'Projet 1',
    'description':'Le projet est en cours',
    'image':'pas image encore',

    },
    {

    'id':'2',
    'titre':'Projet 2',
    'description':'Le projet est en cours',
    'image':'pas image encore',
    
    },
    {

    'id':'3',
    'titre':'Projet 3',
    'description':'Le projet est en cours',
    'image':'pas image encore',
    
    },
]



@app.route('/api/projects', methods=['GET'])
def getproject():
    return jsonify(Project_infos)

@app.route('/api/projects', methods=['POST'])
def add_project():
    new_project = request.get_json()
    Project_infos.append(new_project)
    return jsonify(new_project), 201