import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import './Messages.css';

function Messages() {
  const { user } = useAuth();
  const [conversations, setConversations] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    loadConversations();
  }, []);

  useEffect(() => {
    if (selectedUser) {
      loadMessages(selectedUser._id);
    }
  }, [selectedUser]);

  const loadConversations = async () => {
    try {
      const res = await axios.get('/api/messages');
      setConversations(res.data);
    } catch (error) {
      console.error('Error loading conversations:', error);
    }
  };

  const loadMessages = async (userId) => {
    try {
      const res = await axios.get(`/api/messages/${userId}`);
      setMessages(res.data);
    } catch (error) {
      console.error('Error loading messages:', error);
    }
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    try {
      const res = await axios.post('/api/messages', {
        recipient: selectedUser._id,
        content: newMessage
      });
      setMessages([...messages, res.data]);
      setNewMessage('');
    } catch (error) {
      alert(error.response?.data?.message || 'Error sending message');
    }
  };

  return (
    <div className="messages-container">
      <div className="conversations-sidebar">
        <h2>Messages</h2>
        <div className="conversations-list">
          {conversations.length === 0 ? (
            <div className="empty-state">
              <p>No conversations yet</p>
              <p className="small">Add friends to start chatting!</p>
            </div>
          ) : (
            conversations.map(conv => (
              <div
                key={conv.user._id}
                className={`conversation-item ${selectedUser?._id === conv.user._id ? 'active' : ''}`}
                onClick={() => setSelectedUser(conv.user)}
              >
                <div className="conversation-avatar">{conv.user.name[0]}</div>
                <div className="conversation-info">
                  <h4>{conv.user.name}</h4>
                  <p className="last-message">
                    {conv.lastMessage.content.substring(0, 30)}
                    {conv.lastMessage.content.length > 30 ? '...' : ''}
                  </p>
                </div>
                {conv.unreadCount > 0 && (
                  <span className="unread-badge">{conv.unreadCount}</span>
                )}
              </div>
            ))
          )}
        </div>
      </div>

      <div className="messages-main">
        {selectedUser ? (
          <>
            <div className="messages-header">
              <div className="messages-user-info">
                <div className="user-avatar">{selectedUser.name[0]}</div>
                <div>
                  <h3>{selectedUser.name}</h3>
                  <p>{selectedUser.university || ''}</p>
                </div>
              </div>
            </div>

            <div className="messages-body">
              {messages.map(message => (
                <div
                  key={message._id}
                  className={`message ${message.sender._id === user._id ? 'sent' : 'received'}`}
                >
                  <div className="message-content">
                    <p>{message.content}</p>
                    <span className="message-time">
                      {new Date(message.createdAt).toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <form className="message-input-form" onSubmit={sendMessage}>
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message..."
              />
              <button type="submit" className="btn-primary">Send</button>
            </form>
          </>
        ) : (
          <div className="no-conversation-selected">
            <h3>Select a conversation</h3>
            <p>Choose a conversation from the left to start messaging</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Messages;
