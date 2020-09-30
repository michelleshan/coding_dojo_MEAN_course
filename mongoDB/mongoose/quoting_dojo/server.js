// imports
const express = require('express');
const app = express();
const ejs = require('ejs');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

// connection
mongoose.connect('mongodb://localhost/quoting_dojo', {useNewURLParser: true});

// settings

app.use(express.static(__dirname + '/static'));
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs')
app.set('views', __dirname+ '/views')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

// routes
require('./server/config/routes.js')(app)

// starting server
app.listen(8000, () => console.log("listening on port 8000"));