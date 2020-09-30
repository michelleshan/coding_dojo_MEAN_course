const mongoose = require('mongoose');

const RatingSchema = new mongoose.Schema({
    stars: {type: Number, required: true, min:1, max:5},
    comment: {type: String, required: true},
}, {timestamps: {createdAt:'created_at', updatedAt: 'updated_at'}});

module.exports ={
    Rating: mongoose.model('Rating', RatingSchema)
}