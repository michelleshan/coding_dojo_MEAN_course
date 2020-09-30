const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    first_name: {type: String, required: [true, 'First name is required'], minlength: [2, 'First name must be at least 2 characters long']},
    last_name: {type: String, required: [true, 'Last name is required'], minlength: [1, 'Last name must be at least 1 character long']},
    email: {type: String, required: [true, 'Email is required']},
    password: {type: String, required: [true, 'Password is required'], minlength: [8, 'Password must be at least 8 characters long']}
}, {timestamps: {createdAt:'created_at', updatedAt: 'updated_at'}});

module.exports ={
    User: mongoose.model('User', UserSchema)
}