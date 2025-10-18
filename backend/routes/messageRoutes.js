const express = require('express');
const router = express.Router();
const {
  sendMessage,
  getConversation,
  getAllConversations,
  markAsRead
} = require('../controllers/messageController');
const { protect } = require('../middleware/auth');

router.post('/', protect, sendMessage);
router.get('/', protect, getAllConversations);
router.get('/:userId', protect, getConversation);
router.put('/:id/read', protect, markAsRead);

module.exports = router;
