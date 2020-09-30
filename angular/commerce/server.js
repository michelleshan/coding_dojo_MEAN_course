// imports
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const flash = require('express-flash');

mongoose.connect('mongodb://localhost/products_DB', {useNewUrlParser: true })

// settings
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public/dist/public'));
app.use(flash());

// routing
require('./server/config/routes.js')(app)

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});

// starting server
app.listen(8000, () => console.log("listening on port 8000"));