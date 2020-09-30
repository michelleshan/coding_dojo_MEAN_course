const mongoose = require('mongoose');

const RaceSchema = new mongoose.Schema({
    date: {type: Date, required: true},
    distance: {type: Number, required: true},
    results: {type: Object}
}, {timestamps: {createdAt:'created_at', updatedAt: 'updated_at'}});

module.exports ={
    Race: mongoose.model('Race', RaceSchema)
}