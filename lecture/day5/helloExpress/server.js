//imports
const express = require('express');
const app = express();

//settings
const ejs = require('ejs');
app.use(express.static(__dirname + '/static'))
app.set('view engine', 'ejs')
app.set('views', __dirname+ '/views')

//routing
app.get('/', (request,response)=> {
    response.render('index')
});

//starting server
app.listen(8000, () => console.log("listening on port 8000"));