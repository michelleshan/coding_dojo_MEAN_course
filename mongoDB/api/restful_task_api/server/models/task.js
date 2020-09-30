const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, default: ""},
    complete: {type: Boolean, required: true, default: false}
}, {timestamps: {createdAt:'created_at', updatedAt: 'updated_at'}});

module.exports ={
    Task: mongoose.model('Task', TaskSchema)
}