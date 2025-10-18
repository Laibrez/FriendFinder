import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/dashboard" className="nav-logo">
          FriendFinder
        </Link>

        <div className="nav-links">
          <Link to="/dashboard" className="nav-link">
            Dashboard
          </Link>
          <Link to="/discover" className="nav-link">
            Discover
          </Link>
          <Link to="/events" className="nav-link">
            Events
          </Link>
          <Link to="/messages" className="nav-link">
            Messages
          </Link>
          <Link to="/profile" className="nav-link">
            Profile
          </Link>
        </div>

        <div className="nav-user">
          <span className="user-name">{user?.name}</span>
          <button className="btn-logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
