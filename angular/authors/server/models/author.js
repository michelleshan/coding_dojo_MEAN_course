const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 3},
    quote: {}
}, {timestamps: {createdAt:'created_at', updatedAt: 'updated_at'}});

module.exports ={
    Author: mongoose.model('Author', AuthorSchema)
}