const mongoose = require('mongoose');
const QuoteSchema = new mongoose.Schema({
    name: String,
    quote: String
}, {timestamps: {createdAt:'created_at'}});

module.exports = {
    Quote: mongoose.model('Quote', QuoteSchema)
}
