const Event = require('../models/Event');

// @desc    Create new event
// @route   POST /api/events
// @access  Private
const createEvent = async (req, res) => {
  try {
    const { title, description, location, date, time, category, maxParticipants } = req.body;

    const event = await Event.create({
      title,
      description,
      location,
      date,
      time,
      category,
      maxParticipants,
      host: req.user._id,
      participants: [req.user._id]
    });

    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all events
// @route   GET /api/events
// @access  Private
const getEvents = async (req, res) => {
  try {
    const events = await Event.find({ isActive: true })
      .populate('host', 'name university')
      .populate('participants', 'name')
      .sort({ date: 1 });
    
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get event by ID
// @route   GET /api/events/:id
// @access  Private
const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id)
      .populate('host', 'name email university')
      .populate('participants', 'name email');

    if (event) {
      res.json(event);
    } else {
      res.status(404).json({ message: 'Event not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Join event
// @route   POST /api/events/:id/join
// @access  Private
const joinEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    // Check if already joined
    if (event.participants.includes(req.user._id)) {
      return res.status(400).json({ message: 'Already joined this event' });
    }

    // Check if event is full
    if (event.participants.length >= event.maxParticipants) {
      return res.status(400).json({ message: 'Event is full' });
    }

    event.participants.push(req.user._id);
    await event.save();

    res.json({ message: 'Successfully joined event' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Leave event
// @route   POST /api/events/:id/leave
// @access  Private
const leaveEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    // Check if user is the host
    if (event.host.toString() === req.user._id.toString()) {
      return res.status(400).json({ message: 'Host cannot leave the event' });
    }

    event.participants = event.participants.filter(
      p => p.toString() !== req.user._id.toString()
    );
    await event.save();

    res.json({ message: 'Successfully left event' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get user's events
// @route   GET /api/events/my-events
// @access  Private
const getMyEvents = async (req, res) => {
  try {
    const events = await Event.find({
      $or: [
        { host: req.user._id },
        { participants: req.user._id }
      ]
    })
      .populate('host', 'name university')
      .populate('participants', 'name')
      .sort({ date: 1 });

    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createEvent,
  getEvents,
  getEventById,
  joinEvent,
  leaveEvent,
  getMyEvents
};
