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
app.get('/lake', (request,response)=> {
    response.render('lake');
});
app.get('/mall', (request,response)=> {
    response.render('mall');
});
app.get('/home', (request,response)=> {
    response.render('home');
});
app.get('/tent', (request,response)=> {
    response.render('tent');
});
app.get('/fishing', (request,response)=> {
    response.render('fishing');
});
app.get('/home/read', (request,response)=> {
    response.render('read');
});
app.get('/home/nap', (request,response)=> {
    response.render('nap');
});
app.get('/home/snack', (request,response)=> {
    response.render('snack');
});

//starting server
app.listen(8000, () => console.log('listening on port 8000'));