const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const feedSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        default: 0
    },

}, { timestamps: true });

module.exports = mongoose.model('Feed', feedSchema);