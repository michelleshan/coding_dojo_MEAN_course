const mongoose = require('mongoose');
const {Comment} = require('./comment')

const MessageSchema = new mongoose.Schema({
    user: {type: String, required: true, minlength: 2},
    message: {type: String, required: true},
    comments: [Comment.schema]
}, {timestamps: {createdAt:'created_at'}});

module.exports ={
    Message: mongoose.model('Message', MessageSchema)
}
