from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # To allow access from your HTML page

tasks = []

@app.route('/tasks', methods=['GET'])
def get_tasks():
    return jsonify(tasks)

@app.route('/add', methods=['POST'])
def add_task():
    data = request.get_json()
    task = {
        'id': len(tasks) + 1,
        'text': data['text'],
        'status': 'pending'
    }
    tasks.append(task)
    return jsonify({'message': 'Task added', 'task': task})

@app.route('/update/<int:task_id>', methods=['PATCH'])
def update_task(task_id):
    data = request.get_json()
    for task in tasks:
        if task['id'] == task_id:
            task['status'] = data.get('status', task['status'])
            return jsonify({'message': 'Task updated', 'task': task})
    return jsonify({'message': 'Task not found'}), 404

@app.route('/delete/<int:task_id>', methods=['DELETE'])
def delete_task(task_id):
    global tasks
    tasks = [task for task in tasks if task['id'] != task_id]
    return jsonify({'message': 'Task deleted'})

if __name__ == '__main__':
    app.run(debug=True)
