const express = require('express');
const router = express.Router();
const {
  createEvent,
  getEvents,
  getEventById,
  joinEvent,
  leaveEvent,
  getMyEvents
} = require('../controllers/eventController');
const { protect } = require('../middleware/auth');

router.post('/', protect, createEvent);
router.get('/', protect, getEvents);
router.get('/my-events', protect, getMyEvents);
router.get('/:id', protect, getEventById);
router.post('/:id/join', protect, joinEvent);
router.post('/:id/leave', protect, leaveEvent);

module.exports = router;
