const express = require('express');
const router = express.Router();
const {
  updateProfile,
  getUserById,
  discoverUsers,
  sendFriendRequest,
  acceptFriendRequest,
  getFriends
} = require('../controllers/userController');
const { protect } = require('../middleware/auth');

router.put('/profile', protect, updateProfile);
router.get('/discover', protect, discoverUsers);
router.get('/friends', protect, getFriends);
router.post('/friend-request/:id', protect, sendFriendRequest);
router.put('/friend-request/:requestId/accept', protect, acceptFriendRequest);
router.get('/:id', protect, getUserById);

module.exports = router;
