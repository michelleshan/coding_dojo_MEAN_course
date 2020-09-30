// imports
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/cakes_DB', {useNewUrlParser: true })

// settings
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public/dist/public'));

// routing
require('./server/config/routes.js')(app)

// starting server
app.listen(8000, () => console.log("listening on port 8000"));