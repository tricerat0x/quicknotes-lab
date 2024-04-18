const Note = require('../models/Note');

exports.getNotes = async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.json(notes);
  } catch (err) {
    res.status(500).send(err.toString());
  }
};

exports.createNote = async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) return res.status(400).json({ message: "Text is required" });

    const note = new Note({
      text,
      user: req.user.id
    });
    await note.save();
    res.status(201).json(note);
  } catch (err) {
    res.status(500).send(err.toString());
  }
};
