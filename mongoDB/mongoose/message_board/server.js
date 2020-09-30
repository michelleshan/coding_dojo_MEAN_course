// imports
const express = require('express');
const app = express();
const ejs = require('ejs');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
// const session = require('express-session');
// const flash = require('express-flash')

// settings
mongoose.connect('mongodb://localhost/message_board', {useNewURLParser: true});
app.use(express.static(__dirname + '/static'));
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs')
app.set('views', __dirname+ '/views')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
// app.use(session({
//     secret: 'supersecret',
//     resave: false,
//     saveUninitialized: true,
//     cookie: {maxAge: 60000}
// }));
// app.use(flash());

// routing
require('./server/config/routes.js')(app)

// starting server
app.listen(8000, () => console.log("listening on port 8000"));