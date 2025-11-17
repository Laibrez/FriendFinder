import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import './Profile.css';

function Profile() {
  const { user, setUser } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    university: '',
    major: '',
    year: '',
    bio: '',
    interests: '',
    hobbies: '',
    goals: ''
  });
  const [message, setMessage] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || '',
        university: user.university || '',
        major: user.major || '',
        year: user.year || '',
        bio: user.bio || '',
        interests: user.interests?.join(', ') || '',
        hobbies: user.hobbies?.join(', ') || '',
        goals: user.goals?.join(', ') || ''
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const dataToSend = {
        ...formData,
        interests: formData.interests.split(',').map(i => i.trim()).filter(i => i),
        hobbies: formData.hobbies.split(',').map(h => h.trim()).filter(h => h),
        goals: formData.goals.split(',').map(g => g.trim()).filter(g => g)
      };

      const res = await axios.put('/api/users/profile', dataToSend);
      setUser({ ...user, ...res.data });
      setMessage('Profile updated successfully!');
      setIsEditing(false);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Error updating profile');
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-avatar">{user?.name?.[0]}</div>
        <div className="profile-info">
          <h1>{user?.name}</h1>
          <p>{user?.university}</p>
          <p className="email">{user?.email}</p>
        </div>
        <button 
          className="btn-secondary" 
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? 'Cancel' : 'Edit Profile'}
        </button>
      </div>

      <div className="profile-content">
        {message && (
          <div className={`message ${message.includes('Error') ? 'error' : 'success'}`}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-section">
            <h2>Basic Information</h2>
            
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>

            <div className="form-group">
              <label>University</label>
              <input
                type="text"
                name="university"
                value={formData.university}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Major</label>
                <input
                  type="text"
                  name="major"
                  value={formData.major}
                  onChange={handleChange}
                  disabled={!isEditing}
                  placeholder="Computer Science"
                />
              </div>

              <div className="form-group">
                <label>Year</label>
                <select
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  disabled={!isEditing}
                >
                  <option value="">Select Year</option>
                  <option value="Freshman">Freshman</option>
                  <option value="Sophomore">Sophomore</option>
                  <option value="Junior">Junior</option>
                  <option value="Senior">Senior</option>
                  <option value="Graduate">Graduate</option>
                </select>
              </div>
            </div>
          </div>

          <div className="form-section">
            <h2>About Me</h2>
            
            <div className="form-group">
              <label>Bio</label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                disabled={!isEditing}
                rows="4"
                placeholder="Tell us about yourself..."
                maxLength="500"
              />
            </div>
          </div>

          <div className="form-section">
            <h2>Interests & Hobbies</h2>
            <p className="helper-text">Separate with commas (e.g., Basketball, Reading, Coding)</p>
            
            <div className="form-group">
              <label>Interests</label>
              <input
                type="text"
                name="interests"
                value={formData.interests}
                onChange={handleChange}
                disabled={!isEditing}
                placeholder="Technology, Music, Sports"
              />
            </div>

            <div className="form-group">
              <label>Hobbies</label>
              <input
                type="text"
                name="hobbies"
                value={formData.hobbies}
                onChange={handleChange}
                disabled={!isEditing}
                placeholder="Gaming, Hiking, Photography"
              />
            </div>

            <div className="form-group">
              <label>Goals</label>
              <input
                type="text"
                name="goals"
                value={formData.goals}
                onChange={handleChange}
                disabled={!isEditing}
                placeholder="Learn a new language, Make new friends"
              />
            </div>
          </div>

          {isEditing && (
            <button type="submit" className="btn-primary">Save Changes</button>
          )}
        </form>
      </div>
    </div>
  );
}

export default Profile;
