const mongoose = require('mongoose');

const ChimpanzeeSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 2},
    age: {type: Number, required: true, min:0, max:100},
    sex: {type: String, required: true},
    fav_food: {type: String, required: true}
}, {timestamps: {createdAt:'created_at'}});

module.exports ={
    Chimpanzee: mongoose.model('Chimpanzee', ChimpanzeeSchema)
}