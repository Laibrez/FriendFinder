# FriendFinder

A full-stack web application designed to help college students and young adults create genuine friendships based on shared interests, hobbies, and personal goals. FriendFinder fosters real social connections — not dating — making it easier for new or introverted students to meet people around them.

## Features

### 🔐 User Authentication
- Secure registration and login
- JWT-based authentication
- Password hashing with bcrypt

### 👤 User Profiles
- Detailed profile management
- Add interests, hobbies, and personal goals
- University and academic information
- Personal bio

### 🔍 Friend Discovery
- Smart matching algorithm based on:
  - Shared interests
  - Common hobbies
  - Similar goals
  - Same university
- Send and accept friend requests
- View friend lists

### 📅 Events System
- Create and host events
- Browse available events by category
- Join events that interest you
- Categories: Sports, Study, Social, Gaming, Arts, Music, Food, Outdoor, and more
- Event details include location, date, time, and participant limits

### 💬 Real-time Messaging
- Private messaging with friends
- Real-time chat using Socket.io
- Conversation history
- Unread message indicators

## Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **Socket.io** - Real-time messaging
- **bcryptjs** - Password hashing

### Frontend
- **React** - UI library
- **React Router** - Navigation
- **Axios** - HTTP client
- **Vite** - Build tool
- **Socket.io Client** - Real-time communication

## Project Structure

```
FriendFinder/
├── backend/
│   ├── config/
│   │   └── db.js              # Database configuration
│   ├── controllers/
│   │   ├── authController.js  # Authentication logic
│   │   ├── eventController.js # Event management
│   │   ├── messageController.js # Messaging logic
│   │   └── userController.js  # User management
│   ├── middleware/
│   │   └── auth.js            # Auth middleware
│   ├── models/
│   │   ├── Event.js           # Event model
│   │   ├── Message.js         # Message model
│   │   └── User.js            # User model
│   ├── routes/
│   │   ├── authRoutes.js      # Auth routes
│   │   ├── eventRoutes.js     # Event routes
│   │   ├── messageRoutes.js   # Message routes
│   │   └── userRoutes.js      # User routes
│   ├── .env.example           # Environment variables template
│   ├── package.json
│   └── server.js              # Entry point
│
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   │   └── Navbar.jsx     # Navigation bar
    │   ├── context/
    │   │   └── AuthContext.jsx # Auth context provider
    │   ├── pages/
    │   │   ├── Dashboard.jsx  # Main dashboard
    │   │   ├── Discover.jsx   # Friend discovery
    │   │   ├── Events.jsx     # Events page
    │   │   ├── Login.jsx      # Login page
    │   │   ├── Messages.jsx   # Messaging interface
    │   │   ├── Profile.jsx    # User profile
    │   │   └── Register.jsx   # Registration page
    │   ├── App.jsx            # Main app component
    │   ├── main.jsx           # Entry point
    │   └── index.css          # Global styles
    ├── index.html
    ├── package.json
    └── vite.config.js

```

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

4. Update the `.env` file with your configuration:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/friendfinder
JWT_SECRET=your_secret_key_here
CLIENT_URL=http://localhost:3000
```

5. Start the server:
```bash
# Development mode
npm run dev

# Production mode
npm start
```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:3000`

## Usage

1. **Register an Account**
   - Navigate to the registration page
   - Fill in your name, email, university, and password
   - Submit the form to create your account

2. **Complete Your Profile**
   - Add your major, year, and bio
   - List your interests, hobbies, and goals
   - Save your profile

3. **Discover Friends**
   - Browse suggested users based on your interests
   - Send friend requests to people you'd like to connect with
   - Accept incoming friend requests

4. **Join or Create Events**
   - Browse available events
   - Join events that interest you
   - Create your own events for others to join

5. **Message Friends**
   - Chat with your friends in real-time
   - View conversation history
   - See unread messages

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (protected)

### Users
- `GET /api/users/:id` - Get user by ID (protected)
- `PUT /api/users/profile` - Update profile (protected)
- `GET /api/users/discover` - Discover users (protected)
- `GET /api/users/friends` - Get friends list (protected)
- `POST /api/users/friend-request/:id` - Send friend request (protected)
- `PUT /api/users/friend-request/:requestId/accept` - Accept friend request (protected)

### Events
- `GET /api/events` - Get all events (protected)
- `POST /api/events` - Create event (protected)
- `GET /api/events/:id` - Get event by ID (protected)
- `GET /api/events/my-events` - Get user's events (protected)
- `POST /api/events/:id/join` - Join event (protected)
- `POST /api/events/:id/leave` - Leave event (protected)

### Messages
- `GET /api/messages` - Get all conversations (protected)
- `POST /api/messages` - Send message (protected)
- `GET /api/messages/:userId` - Get conversation with user (protected)
- `PUT /api/messages/:id/read` - Mark message as read (protected)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the ISC License.

## Contact

For questions or support, please open an issue in the repository. 
