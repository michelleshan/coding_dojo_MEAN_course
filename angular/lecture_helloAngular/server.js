// imports
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// settings
app.use(express.static(__dirname + '/public/dist/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

// routing
require('./server/config/routes.js')(app)

// starting server
app.listen(8000, () => console.log("listening on port 8000"));