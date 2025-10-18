from flask import Flask, request, jsonify

# Initialize Flask app
app = Flask(__name__)

# In-memory data storage (replace with a database in a real application)
users = {}
matches = {}
messages = {}

# User profile endpoint
@app.route('/users', methods=['POST'])
def create_user():
    user_data = request.json
    user_id = user_data.get('user_id')
    bio = user_data.get('bio', '') # Add a 'bio' field, default to empty string if not provided
    if user_id not in users:
        users[user_id] = {"user_id": user_id, "bio": bio} # Store user_id and bio
        return jsonify({"message": "User created successfully"}), 201
    return jsonify({"message": "User already exists"}), 409

@app.route('/users/<user_id>', methods=['GET'])
def get_user(user_id):
    user = users.get(user_id)
    if user:
        return jsonify(user), 200
    return jsonify({"message": "User not found"}), 404

# Matching endpoint (simplified)
@app.route('/match/<user_id>', methods=['GET'])
def find_match(user_id):
    # Basic matching logic: find a random user who is not the current user and not already matched
    available_users = [uid for uid in users if uid != user_id and uid not in matches.get(user_id, [])]
    if available_users:
        match_id = available_users[0] # In a real app, implement a proper matching algorithm
        if user_id not in matches:
            matches[user_id] = []
        if match_id not in matches:
            matches[match_id] = []
        matches[user_id].append(match_id)
        matches[match_id].append(user_id)
        return jsonify({"match_id": match_id, "match_profile": users[match_id]}), 200
    return jsonify({"message": "No potential matches found"}), 404

# Messaging endpoints
@app.route('/messages/<user_id>/<recipient_id>', methods=['POST'])
def send_message(user_id, recipient_id):
    message_data = request.json
    message_content = message_data.get('content')
    if user_id in users and recipient_id in users:
        if (user_id, recipient_id) not in messages:
            messages[(user_id, recipient_id)] = []
        messages[(user_id, recipient_id)].append({"sender": user_id, "content": message_content})
        # In a real app, also store the message for the recipient for easy retrieval
        if (recipient_id, user_id) not in messages:
             messages[(recipient_id, user_id)] = []
        messages[(recipient_id, user_id)].append({"sender": user_id, "content": message_content})

        return jsonify({"message": "Message sent successfully"}), 201
    return jsonify({"message": "User or recipient not found"}), 404

@app.route('/messages/<user_id>/<sender_id>', methods=['GET'])
def get_messages(user_id, sender_id):
    conversation = messages.get((sender_id, user_id), []) + messages.get((user_id, sender_id), [])
    # Sort messages by timestamp if available in message data (not implemented in this basic example)
    return jsonify(conversation), 200

if __name__ == '__main__':
    # In a real application, do not run with debug=True in production
    app.run(debug=True)
