import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Dashboard.css';

function Dashboard() {
  const { user } = useAuth();
  const [events, setEvents] = useState([]);
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      const [eventsRes, friendsRes] = await Promise.all([
        axios.get('/api/events/my-events'),
        axios.get('/api/users/friends')
      ]);
      setEvents(eventsRes.data.slice(0, 3));
      setFriends(friendsRes.data.slice(0, 5));
    } catch (error) {
      console.error('Error loading dashboard:', error);
    }
  };

  const profileComplete = user?.interests?.length > 0 && user?.bio;

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Welcome, {user?.name}!</h1>
        <p className="university">{user?.university}</p>
      </div>

      {!profileComplete && (
        <div className="alert-card">
          <h3>⚠️ Complete Your Profile</h3>
          <p>Add your interests and bio to help find friends with similar passions!</p>
          <Link to="/profile" className="btn-primary">Complete Profile</Link>
        </div>
      )}

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <div className="card-header">
            <h2>Quick Actions</h2>
          </div>
          <div className="quick-actions">
            <Link to="/discover" className="action-card">
              <div className="action-icon">🔍</div>
              <h3>Discover Friends</h3>
              <p>Find students with similar interests</p>
            </Link>
            <Link to="/events" className="action-card">
              <div className="action-icon">📅</div>
              <h3>Browse Events</h3>
              <p>Join or create social events</p>
            </Link>
            <Link to="/messages" className="action-card">
              <div className="action-icon">💬</div>
              <h3>Messages</h3>
              <p>Chat with your friends</p>
            </Link>
          </div>
        </div>

        <div className="dashboard-card">
          <div className="card-header">
            <h2>My Friends ({friends.length})</h2>
            <Link to="/discover">View All</Link>
          </div>
          <div className="friends-list">
            {friends.length === 0 ? (
              <p className="empty-state">No friends yet. Start discovering!</p>
            ) : (
              friends.map(friend => (
                <div key={friend._id} className="friend-item">
                  <div className="friend-avatar">{friend.name[0]}</div>
                  <div className="friend-info">
                    <h4>{friend.name}</h4>
                    <p>{friend.university}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="dashboard-card">
          <div className="card-header">
            <h2>Upcoming Events</h2>
            <Link to="/events">View All</Link>
          </div>
          <div className="events-list">
            {events.length === 0 ? (
              <p className="empty-state">No upcoming events. Browse events to join!</p>
            ) : (
              events.map(event => (
                <div key={event._id} className="event-item">
                  <div className="event-date">
                    {new Date(event.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </div>
                  <div className="event-info">
                    <h4>{event.title}</h4>
                    <p>{event.location} • {event.time}</p>
                    <span className="event-category">{event.category}</span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
