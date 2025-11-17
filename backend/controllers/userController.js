const User = require('../models/User');

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (user) {
      user.name = req.body.name || user.name;
      user.university = req.body.university || user.university;
      user.major = req.body.major || user.major;
      user.year = req.body.year || user.year;
      user.bio = req.body.bio || user.bio;
      user.interests = req.body.interests || user.interests;
      user.hobbies = req.body.hobbies || user.hobbies;
      user.goals = req.body.goals || user.goals;

      const updatedUser = await user.save();

      res.json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        university: updatedUser.university,
        major: updatedUser.major,
        year: updatedUser.year,
        bio: updatedUser.bio,
        interests: updatedUser.interests,
        hobbies: updatedUser.hobbies,
        goals: updatedUser.goals
      });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get user by ID
// @route   GET /api/users/:id
// @access  Private
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Find users with similar interests
// @route   GET /api/users/discover
// @access  Private
const discoverUsers = async (req, res) => {
  try {
    const currentUser = await User.findById(req.user._id);
    
    // Find users with at least one matching interest or hobby
    const users = await User.find({
      _id: { $ne: req.user._id },
      $or: [
        { interests: { $in: currentUser.interests } },
        { hobbies: { $in: currentUser.hobbies } },
        { goals: { $in: currentUser.goals } },
        { university: currentUser.university }
      ]
    }).select('-password').limit(20);

    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Send friend request
// @route   POST /api/users/friend-request/:id
// @access  Private
const sendFriendRequest = async (req, res) => {
  try {
    const recipient = await User.findById(req.params.id);
    
    if (!recipient) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if already friends
    if (recipient.friends.includes(req.user._id)) {
      return res.status(400).json({ message: 'Already friends' });
    }

    // Check if request already sent
    const existingRequest = recipient.friendRequests.find(
      req => req.from.toString() === req.user._id.toString()
    );

    if (existingRequest) {
      return res.status(400).json({ message: 'Friend request already sent' });
    }

    recipient.friendRequests.push({
      from: req.user._id,
      status: 'pending'
    });

    await recipient.save();

    res.json({ message: 'Friend request sent' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Accept friend request
// @route   PUT /api/users/friend-request/:requestId/accept
// @access  Private
const acceptFriendRequest = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const requestIndex = user.friendRequests.findIndex(
      req => req._id.toString() === req.params.requestId
    );

    if (requestIndex === -1) {
      return res.status(404).json({ message: 'Friend request not found' });
    }

    const request = user.friendRequests[requestIndex];
    request.status = 'accepted';

    // Add to friends list
    user.friends.push(request.from);
    
    // Add current user to sender's friends list
    const sender = await User.findById(request.from);
    sender.friends.push(user._id);

    await user.save();
    await sender.save();

    res.json({ message: 'Friend request accepted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get friends list
// @route   GET /api/users/friends
// @access  Private
const getFriends = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate('friends', '-password');
    res.json(user.friends);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  updateProfile,
  getUserById,
  discoverUsers,
  sendFriendRequest,
  acceptFriendRequest,
  getFriends
};
