// imports
const express = require('express');
const app = express();
const mongoose = require('mongoose')
const session = require('express-session');
const server = require('http').Server(app)
const io = require('socket.io')(server);

mongoose.connect("mongodb://localhost/dojoChat_DB", {useNewUrlParser: true})

// settings
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(__dirname + '/chatApp/dist/chatApp'));
app.use(session({
    secret: 'I solemnly swear I am up to no good',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 500000}
}))

// routing
require('./server/config/routes.js')(app)
ChatController = require('./server/controllers/chats')
let chat = {_id:null, users:[],messages:[]}
ChatController.last().then((lastChat) => {chat = lastChat})

// ChatController.create()

io.on('connection', function(socket){
    console.log('New User connected')
    socket.emit('handshake', "")

    socket.on('handshake',(msg) => {
        io.emit('newMsg', {msg: `${msg} connected`, name: 'Server'})
        // socket.broadcast.emit => emits the message to everyone BUT the user
        // io.emit => emits message to everyone
        // socket.emit => emits message to user
    })
    socket.on('newMessage', (msg) => {
        console.log('New message from user: ', msg)
        ChatController.addMessage(chat, msg)
        socket.broadcast.emit('newMsg', msg)
    })
    socket.on('userTyping',(msg) => {
        socket.broadcast.emit('typing', msg)
    })
    socket.on('userStoppedTyping',(msg) => {
        //console.log('userStopped typing')
        socket.broadcast.emit('typingStopped', msg)
    })
})

// starting server
server.listen(8000, () => console.log("listening on port 8000"));