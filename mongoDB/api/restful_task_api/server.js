// imports
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

// settings
mongoose.connect('mongodb://localhost/tasks_DB', {useNewURLParser: true});
app.use(express.static(__dirname + '/static'));
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

// routing
require('./server/config/routes.js')(app)

// starting server
app.listen(8000, () => console.log("listening on port 8000"));