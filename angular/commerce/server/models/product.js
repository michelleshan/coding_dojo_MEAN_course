const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {type: String, required: [true, 'Product must have a name'], minlength: [3, 'Product name must be at least 3 characters long']},
    quantity: {type: Number, required: [true, 'Product must have a quantity'], min: [0, 'Product must have a quantity of at least 0'] },
    price: {type: Number, required: [true, 'Product must have a price'], min: [0, 'Product price must be at least $0.00']}
}, {timestamps: {createdAt:'created_at', updatedAt: 'updated_at'}});

module.exports ={
    Product: mongoose.model('Product', ProductSchema)
}