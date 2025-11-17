import { useState, useEffect } from 'react';
import axios from 'axios';
import './Events.css';

function Events() {
  const [events, setEvents] = useState([]);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    date: '',
    time: '',
    category: 'Social',
    maxParticipants: 10
  });

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    try {
      const res = await axios.get('/api/events');
      setEvents(res.data);
    } catch (error) {
      console.error('Error loading events:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/events', formData);
      setShowCreateForm(false);
      setFormData({
        title: '',
        description: '',
        location: '',
        date: '',
        time: '',
        category: 'Social',
        maxParticipants: 10
      });
      loadEvents();
    } catch (error) {
      alert(error.response?.data?.message || 'Error creating event');
    }
  };

  const joinEvent = async (eventId) => {
    try {
      await axios.post(`/api/events/${eventId}/join`);
      loadEvents();
      alert('Successfully joined event!');
    } catch (error) {
      alert(error.response?.data?.message || 'Error joining event');
    }
  };

  return (
    <div className="events-container">
      <div className="events-header">
        <div>
          <h1>Events</h1>
          <p>Join social events or create your own</p>
        </div>
        <button 
          className="btn-primary"
          onClick={() => setShowCreateForm(!showCreateForm)}
        >
          {showCreateForm ? 'Cancel' : '+ Create Event'}
        </button>
      </div>

      {showCreateForm && (
        <div className="create-event-form">
          <h2>Create New Event</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Event Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                placeholder="Study Session, Game Night, etc."
              />
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows="3"
                placeholder="Describe your event..."
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  placeholder="Campus Library, Coffee Shop, etc."
                />
              </div>

              <div className="form-group">
                <label>Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option value="Sports">Sports</option>
                  <option value="Study">Study</option>
                  <option value="Social">Social</option>
                  <option value="Gaming">Gaming</option>
                  <option value="Arts">Arts</option>
                  <option value="Music">Music</option>
                  <option value="Food">Food</option>
                  <option value="Outdoor">Outdoor</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Time</label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Max Participants</label>
                <input
                  type="number"
                  name="maxParticipants"
                  value={formData.maxParticipants}
                  onChange={handleChange}
                  min="2"
                  max="100"
                />
              </div>
            </div>

            <button type="submit" className="btn-primary">Create Event</button>
          </form>
        </div>
      )}

      <div className="events-grid">
        {events.length === 0 ? (
          <div className="empty-state">
            <h3>No events yet</h3>
            <p>Be the first to create an event!</p>
          </div>
        ) : (
          events.map(event => (
            <div key={event._id} className="event-card">
              <div className="event-category-badge">{event.category}</div>
              <h3>{event.title}</h3>
              <p className="event-description">{event.description}</p>
              
              <div className="event-details">
                <div className="event-detail">
                  <span className="icon">📅</span>
                  <span>{new Date(event.date).toLocaleDateString()}</span>
                </div>
                <div className="event-detail">
                  <span className="icon">⏰</span>
                  <span>{event.time}</span>
                </div>
                <div className="event-detail">
                  <span className="icon">📍</span>
                  <span>{event.location}</span>
                </div>
                <div className="event-detail">
                  <span className="icon">👥</span>
                  <span>{event.participants.length}/{event.maxParticipants} participants</span>
                </div>
              </div>

              <div className="event-host">
                <p>Hosted by: {event.host.name}</p>
              </div>

              <button 
                className="btn-primary"
                onClick={() => joinEvent(event._id)}
                disabled={event.participants.length >= event.maxParticipants}
              >
                {event.participants.length >= event.maxParticipants ? 'Full' : 'Join Event'}
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Events;
