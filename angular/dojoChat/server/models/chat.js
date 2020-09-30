const mongoose = require('mongoose')

const ChatSchema = new mongoose.Schema({
    messages: [{msg:String, name:String, color:Number, you:Boolean}],
    users: [String]
})

module.exports = {
    Chat: mongoose.model('Chat', ChatSchema)
}