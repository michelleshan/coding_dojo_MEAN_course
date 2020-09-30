// imports
const express = require('express');
const app = express();
const session = require('express-session');
app.use(session({
    secret: 'keepitsecretkeepitsafe',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

// settings
const ejs = require('ejs');
app.use(express.static(__dirname + '/static'));
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs')
app.set('views', __dirname+ '/views')

// routing
app.post('/banana', (req, res) => {
    req.session.name = req.body.fname;
    req.session.whatever = 42;
    //do something with form data
    console.log(req.body);
    // res.redirect('/');
    context = {
        'name': req.body.fname
    }
    console.log('context.name is:',context.name);
    res.render('success',context)
});

app.get('/users/:id/:apple', (req,res) => {
    console.log(req.params.id);
    console.log(req.params.apple);
    // context = {
    //     'id': req.params.apple
    // }
    res.redirect('/');
});

app.get('/session', (req,res) => {
    console.log(req.session);
    console.log("Value of name in session: ", req.session.name);
    res.redirect('/')
});

// starting server
app.listen(8000, () => console.log("listening on port 8000"));