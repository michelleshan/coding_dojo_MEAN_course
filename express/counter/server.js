// imports
const express = require('express');
const app = express();
const ejs = require('ejs');
const session = require('express-session');

// settings
app.use(express.static(__dirname + '/static'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(session({
    secret: 'supersecret',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000}
}));
app.use(function(req,res,next){
    res.locals.views = req.session.views;
    next();
});

// routing
app.get('/', (req, res) => {
    req.session.views += 1;
    console.log("Views in session: ", req.session.views);
    res.render('index', {title: 'my root route'});
});

app.post('/plusTwo',(req,res)=>{
    req.session.views += 1;
    res.redirect('/')
});

app.post('/destroy',(req,res) =>{
    req.session.destroy();
    res.redirect('/');
});

// starting server
app.listen(8000, () => console.log('listening on port 8000'));