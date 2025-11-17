const Message = require('../models/Message');

// @desc    Send message
// @route   POST /api/messages
// @access  Private
const sendMessage = async (req, res) => {
  try {
    const { recipient, content } = req.body;

    if (!recipient || !content) {
      return res.status(400).json({ message: 'Please provide recipient and content' });
    }

    const message = await Message.create({
      sender: req.user._id,
      recipient,
      content
    });

    const populatedMessage = await Message.findById(message._id)
      .populate('sender', 'name')
      .populate('recipient', 'name');

    res.status(201).json(populatedMessage);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get conversation with a user
// @route   GET /api/messages/:userId
// @access  Private
const getConversation = async (req, res) => {
  try {
    const messages = await Message.find({
      $or: [
        { sender: req.user._id, recipient: req.params.userId },
        { sender: req.params.userId, recipient: req.user._id }
      ]
    })
      .populate('sender', 'name')
      .populate('recipient', 'name')
      .sort({ createdAt: 1 });

    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all conversations
// @route   GET /api/messages
// @access  Private
const getAllConversations = async (req, res) => {
  try {
    const messages = await Message.find({
      $or: [
        { sender: req.user._id },
        { recipient: req.user._id }
      ]
    })
      .populate('sender', 'name')
      .populate('recipient', 'name')
      .sort({ createdAt: -1 });

    // Group messages by conversation
    const conversations = {};
    messages.forEach(msg => {
      const otherUser = msg.sender._id.toString() === req.user._id.toString() 
        ? msg.recipient 
        : msg.sender;
      const key = otherUser._id.toString();
      
      if (!conversations[key]) {
        conversations[key] = {
          user: otherUser,
          lastMessage: msg,
          unreadCount: 0
        };
      }

      if (!msg.read && msg.recipient._id.toString() === req.user._id.toString()) {
        conversations[key].unreadCount++;
      }
    });

    res.json(Object.values(conversations));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Mark message as read
// @route   PUT /api/messages/:id/read
// @access  Private
const markAsRead = async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);

    if (!message) {
      return res.status(404).json({ message: 'Message not found' });
    }

    if (message.recipient.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized' });
    }

    message.read = true;
    message.readAt = Date.now();
    await message.save();

    res.json(message);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  sendMessage,
  getConversation,
  getAllConversations,
  markAsRead
};
