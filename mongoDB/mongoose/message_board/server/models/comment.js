const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    user: {type: String, required: true, minlength: 2},
    comment: {type: String, required: true}
}, {timestamps: {createdAt: 'created_at'}});

module.exports = {
    Comment: mongoose.model('Comment', CommentSchema)
}
