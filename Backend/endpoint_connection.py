from flask import Flask, jsonify

app = Flask(__name__)

# In-memory stores (replace with persistent storage in production)
users = {}  # e.g. {"alice": {...}, "bob": {...}}
call_invitations = {}  # keys: tuple(sorted(caller_id, recipient_id)) -> {"caller_id":..., "recipient_id":..., "state":...}
active_calls = set()  # set of tuples (user1, user2)
CALL_STATE_PENDING = "pending"

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
