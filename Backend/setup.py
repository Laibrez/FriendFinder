from flask import Flask, request, jsonify
import requests
import uuid

# Initialize Flask app
app = Flask(__name__)

# In-memory data storage (replace with a database in a real application)
users = {}
matches = {}
messages = {}

# In-memory data storage for call invitations and active calls
call_invitations = {}
active_calls = {} # Stores active calls, key: tuple(sorted(user_ids)), value: {'room_name': '...', 'start_time': '...'}

# Possible states for a call invitation
CALL_STATE_PENDING = 'pending'
CALL_STATE_ACCEPTED = 'accepted'
CALL_STATE_REJECTED = 'rejected'
CALL_STATE_ENDED = 'ended' # State for when a call is finished

# Twilio Credentials (Replace with your actual credentials)
TWILIO_ACCOUNT_SID = 'ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
TWILIO_API_KEY_SID = 'SKxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
TWILIO_API_SECRET = 'your_twilio_api_secret'

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

# Video calling endpoint: Send call invitation
@app.route('/call/invite/<caller_id>/<recipient_id>', methods=['POST'])
def send_call_invite(caller_id, recipient_id):
    # Check if both caller and recipient exist
    if caller_id not in users or recipient_id not in users:
        return jsonify({"message": "Caller or recipient not found"}), 404

    # Check if either user is already involved in a pending invitation or active call
    # Check pending invitations
    for invitation_key in call_invitations:
        inviter, invited = invitation_key
        if (inviter == caller_id or invited == caller_id or
            inviter == recipient_id or invited == recipient_id):
            if call_invitations[invitation_key]['state'] == CALL_STATE_PENDING:
                return jsonify({"message": "User is currently unavailable"}), 409

    # Check active calls
    for call_key in active_calls:
        user1, user2 = call_key
        if (user1 == caller_id or user2 == caller_id or
            user1 == recipient_id or user2 == recipient_id):
            return jsonify({"message": "User is currently in a call"}), 409

    # Create a unique key for the invitation
    invitation_key = tuple(sorted((caller_id, recipient_id)))

    # Create the new invitation
    call_invitations[invitation_key] = {
        "caller_id": caller_id,
        "recipient_id": recipient_id,
        "state": CALL_STATE_PENDING
    }

    return jsonify({"message": "Call invitation sent successfully"}), 201

# Video calling endpoint: Create or get a call room
@app.route('/call/room/<user1_id>/<user2_id>', methods=['POST'])
def create_or_get_call_room(user1_id, user2_id):
    # Check if both users exist
    if user1_id not in users or user2_id not in users:
        return jsonify({"message": "One or both users not found"}), 404

    # Create a unique key for the call
    call_key = tuple(sorted((user1_id, user2_id)))

    # Check if an active room already exists for this pair
    if call_key in active_calls:
        return jsonify({"room_name": active_calls[call_key]['room_name']}), 200

    # If no active room, create a new one using Twilio API
    # In a real application, you would make an API call to Twilio here
    # Example placeholder for creating a room:
    room_name = f"match-{uuid.uuid4()}" # Generate a unique room name

    # Store the new room information
    active_calls[call_key] = {
        "room_name": room_name,
        "start_time": "timestamp_here" # Add a timestamp in a real app
    }

    return jsonify({"room_name": room_name}), 201

# Video calling endpoint: Generate access token
@app.route('/call/token/<user_id>/<room_name>', methods=['GET'])
def generate_call_token(user_id, room_name):
    # Check if the user exists
    if user_id not in users:
        return jsonify({"message": "User not found"}), 404

    # Check if the room exists and is active (basic check based on active_calls)
    room_found = False
    for call_key in active_calls:
        if active_calls[call_key]['room_name'] == room_name:
            room_found = True
            break

    if not room_found:
         # Also check pending invitations to see if a room is about to be created
         invitation_found = False
         for invitation_key, invitation_data in call_invitations.items():
             if (invitation_data['caller_id'] == user_id or invitation_data['recipient_id'] == user_id) and invitation_data['state'] == CALL_STATE_PENDING:
                 # This is a simplification; in a real app, you'd need a more robust way to link pending invites to potential rooms
                 invitation_found = True
                 break
         if not invitation_found:
            return jsonify({"message": "Room not found or not active"}), 404


    # Generate Twilio Access Token
    # In a real application, use the Twilio Python library to generate a token
    # Example placeholder for generating a token:
    token = f"fake_twilio_token_for_{user_id}_in_{room_name}"

    return jsonify({"token": token}), 200


if __name__ == '__main__':
    # In a real application, do not run with debug=True in production
    app.run(debug=True)

