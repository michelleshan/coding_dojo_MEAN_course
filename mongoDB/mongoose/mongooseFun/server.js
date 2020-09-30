// imports
const express = require('express');
const app = express();
const ejs = require('ejs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');

// connection
mongoose.connect("mongodb://localhost/mongooseFun", {useNewUrlParser: true})

// settings
app.use(express.static(__dirname + '/static'));
app.set('view engine', 'ejs');
app.set('views', __dirname+ '/views');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(session ({
    secret: 'I solemnly swear that I am up to no good',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 5000}
}))

// routing
require('./server/config/routes.js')(app)

// starting server
app.listen(8000, () => console.log("listening on port 8000"));