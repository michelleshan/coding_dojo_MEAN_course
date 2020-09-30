const mongoose = require('mongoose');
const PantSchema = new mongoose.Schema({
    color: String,
    material: String
})

exports = {
    models: {
        Pants: mongoose.model('Pants', PantSchema),
        PantSchema: PantSchema
    }
}