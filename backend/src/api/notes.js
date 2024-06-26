const express = require('express');
const router = express.Router();
const { getNotes, createNote } = require('../controllers/notesController');
const { protect } = require('../middleware/authMiddleware');

router.route('/')
  .get(protect, getNotes)
  .post(protect, createNote);

module.exports = router;
