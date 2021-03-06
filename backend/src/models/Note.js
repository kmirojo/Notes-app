const {Schema, model} = require('mongoose');

const noteSchema = new Schema({
    title: String,
    content: {
        type: String,
        required: false
    },
    author: String,
    date: {
        type: Date,
        default: Date.now
    }
},{
    timestamps: true //CreatedAt & UpdatedAt
});

module.exports = model('Note', noteSchema);