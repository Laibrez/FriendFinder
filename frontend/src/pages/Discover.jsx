import { useState, useEffect } from 'react';
import axios from 'axios';
import './Discover.css';

function Discover() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const res = await axios.get('/api/users/discover');
      setUsers(res.data);
    } catch (error) {
      console.error('Error loading users:', error);
    } finally {
      setLoading(false);
    }
  };

  const sendFriendRequest = async (userId) => {
    try {
      await axios.post(`/api/users/friend-request/${userId}`);
      setUsers(users.filter(u => u._id !== userId));
      alert('Friend request sent!');
    } catch (error) {
      alert(error.response?.data?.message || 'Error sending friend request');
    }
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="discover-container">
      <div className="discover-header">
        <h1>Discover New Friends</h1>
        <p>Find students with similar interests and goals</p>
      </div>

      <div className="users-grid">
        {users.length === 0 ? (
          <div className="empty-state">
            <h3>No suggestions available</h3>
            <p>Complete your profile to get better recommendations!</p>
          </div>
        ) : (
          users.map(user => (
            <div key={user._id} className="user-card">
              <div className="user-avatar">{user.name[0]}</div>
              <h3>{user.name}</h3>
              <p className="user-university">{user.university}</p>
              {user.major && <p className="user-major">{user.major}</p>}
              {user.year && <span className="user-year">{user.year}</span>}
              
              {user.bio && (
                <p className="user-bio">{user.bio}</p>
              )}

              {user.interests && user.interests.length > 0 && (
                <div className="tags-section">
                  <h4>Interests</h4>
                  <div className="tags">
                    {user.interests.slice(0, 3).map((interest, idx) => (
                      <span key={idx} className="tag">{interest}</span>
                    ))}
                    {user.interests.length > 3 && (
                      <span className="tag">+{user.interests.length - 3} more</span>
                    )}
                  </div>
                </div>
              )}

              {user.hobbies && user.hobbies.length > 0 && (
                <div className="tags-section">
                  <h4>Hobbies</h4>
                  <div className="tags">
                    {user.hobbies.slice(0, 3).map((hobby, idx) => (
                      <span key={idx} className="tag tag-hobby">{hobby}</span>
                    ))}
                    {user.hobbies.length > 3 && (
                      <span className="tag tag-hobby">+{user.hobbies.length - 3} more</span>
                    )}
                  </div>
                </div>
              )}

              <button 
                className="btn-primary"
                onClick={() => sendFriendRequest(user._id)}
              >
                Add Friend
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Discover;
