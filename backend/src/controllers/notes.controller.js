const NoteModel = require('../models/Note');

const notesCtrl = {
    getNotes: async (req, res) => {
        const notes = await NoteModel.find();
        res.json(notes)
    },
    getNote: async (req, res) => {
        const note = await NoteModel.findById(req.params.id)
        res.json(note);
    },
    createNote: async (req, res) => {
        const {title, content, date, author} = req.body;
        const newNote = new NoteModel({
            title,
            content,
            date,
            author
        })
        console.log(req.body);
        await newNote.save();
        res.json({ message: 'Note Saved' })
    },
    updateNote: async (req, res) => {
        const {title, content, author} = req.body;
        console.log(req.body);
        await NoteModel.findOneAndUpdate({_id: req.params.id}, {
            title,
            author,
            content
        });        
        res.json({ message: 'Note Updated' })
    },
    deleteNote: async (req, res) => {
        await NoteModel.findByIdAndDelete(req.params.id);
        res.json({ message: 'Note Deleted' });
    }
};

// notesCtrl.getNotes = (req, res) => res.json({message: []});

module.exports = notesCtrl;