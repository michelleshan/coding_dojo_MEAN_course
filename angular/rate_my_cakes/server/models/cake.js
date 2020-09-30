const mongoose = require('mongoose');
// const multer = require('multer')
const {Rating} = require('./rating')

const CakeSchema = new mongoose.Schema({
    baker: {type: String, required: true},
    imageURL: {type: String, required: true},
    ratings: [Rating.schema],
}, {timestamps: {createdAt:'created_at', updatedAt: 'updated_at'}});

module.exports ={
    Cake: mongoose.model('Cake', CakeSchema)
}