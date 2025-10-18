# In-memory data storage for call invitations and active calls
# Keys can be a unique call ID (e.g., a UUID) or a combination of caller and recipient IDs.
# For simplicity, let's use a combination of caller and recipient IDs as the key for invitations.
# Active calls can be tracked by a tuple of (user1_id, user2_id)
call_invitations = {}
active_calls = {}

# Possible states for a call invitation
CALL_STATE_PENDING = 'pending'
CALL_STATE_ACCEPTED = 'accepted'
CALL_STATE_REJECTED = 'rejected'
CALL_STATE_ENDED = 'ended' # State for when a call is finished

# Transitions between states:
# PENDING -> ACCEPTED
# PENDING -> REJECTED
# ACCEPTED -> ENDED

# How active calls will be tracked:
# The `active_calls` dictionary will store active calls. The key will be a tuple of (user1_id, user2_id)
# where user1_id < user2_id to ensure uniqueness regardless of who initiated the call.
# The value could be a dictionary containing call start time and other relevant info.

# Handling multiple invitations or calls:
# For this basic implementation, let's assume a user can only have one pending outgoing
# or incoming invitation at a time. If a user is already in a call, new invitations
# to or from that user will be automatically rejected.
