const NoteModel = require('../models/Note');

const notesCtrl = {
    getNotes: async (req, res) => {
        const notes = await NoteModel.find();
        res.json(notes)
    },
    getNote: (req, res) => {
        res.json({message: 'Seleted Note'})
    },
    createNote: async (req, res) => {
        const {title, content, date, author} = req.body;
        const newNote = new NoteModel({
            title: title,
            content: content,
            date: date,
            author: author
        })
        await newNote.save();
        res.json({ message: 'Note Saved' })
    },
    updateNote: (req, res) => {
        res.json({ message: 'Note Updated' })
    },
    deleteNote: (req, res) => {
        res.json({ message: 'Note Deleted' })
    }
};

// notesCtrl.getNotes = (req, res) => res.json({message: []});

module.exports = notesCtrl;