from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
import os

app = Flask(__name__)

# Configure the database
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL', 'postgresql://hansiwang:664512@localhost/todo_db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# Define the TodoItem model
class TodoItem(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    task = db.Column(db.String(200), nullable=False)
    completed = db.Column(db.Boolean, default=False)

# Create the database tables
with app.app_context():
    db.create_all()

# A class in Python is a blueprint for creating objects
# You define a class when you want to model sth with properties
# and behaviors in a structured

# task is parameter is passed to the "__init__" method when you create a new instance of 'TodoItem'
# self is a reference to the current instand of the class
# When you define instance variables or call instance methods inside a class,
# you use 'self' to refer to the current object.

# Create a new to-do item
@app.route('/api/todos', methods=['POST'])
def create_todo():
    data = request.get_json()
    new_todo = TodoItem(task=data['task'])
    db.session.add(new_todo)
    db.session.commit()
    return jsonify({'id': new_todo.id, 'task': new_todo.task, 'completed': new_todo.completed}), 201

# Get all to-do items
@app.route('/api/todos', methods=['GET'])
def get_todos():
    todos = TodoItem.query.all()
    return jsonify([{'id': todo.id, 'task': todo.task, 'completed': todo.completed} for todo in todos])

# Update a to-do item
@app.route('/api/todos/<int:id>', methods=['PUT'])
def update_todo(id):
    data = request.get_json()
    todo = TodoItem.query.get(id)
    if not todo:
        return jsonify({'error': 'Not found'}), 404
    todo.task = data.get('task', todo.task)
    todo.completed = data.get('completed', todo.completed)
    db.session.commit()
    return jsonify({'id': todo.id, 'task': todo.task, 'completed': todo.completed})

# Delete a to-do item
@app.route('/api/todos/<int:id>', methods=['DELETE'])
def delete_todo(id):
    todo = TodoItem.query.get(id)
    if not todo:
        return jsonify({'error': 'Not found'}), 404
    db.session.delete(todo)
    db.session.commit()
    return '', 204

# Home route
@app.route('/')
def home():
    return "Welcome to the To-Do List API"

if __name__ == '__main__':
    app.run(debug=True)