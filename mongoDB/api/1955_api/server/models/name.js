const mongoose = require('mongoose');
const NameSchema = new mongoose.Schema({
    name: String,
}, {timestamps: {createdAt:'created_at', updatedAt: 'updated_at'}});

module.exports = {
    Name: mongoose.model('Name', NameSchema)
}
