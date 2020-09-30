// imports
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

// connection
mongoose.connect('mongodb://localhost/1955_api', {useNewURLParser: true});

// settings

app.use(express.static(__dirname + '/static'));
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

// routes
require('./server/config/routes.js')(app)

// starting server
app.listen(8000, () => console.log("listening on port 8000"));