const mongoose = require('mongoose');
const {PantSchema} = require('./pant')

const UserSchema = new mongoose.Schema({
    name: String,
    age: Number,
    password: String,
    pants: [PantSchema]
})

exports = {
    models: {
        User: mongoose.model('User', UserSchema),
        Pants: mongoose.model('Pants', PantSchema)
    }
}