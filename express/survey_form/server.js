// imports
const express = require('express');
const app = express();

// settings
const ejs = require('ejs');
app.use(express.static(__dirname + '/static'));
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs')
app.set('views', __dirname+ '/views')

// routing
app.post('/result', (req,res) => {
    console.log(req.body);
    user = {
        'name': req.body.name,
        'location': req.body.location,
        'language': req.body.language,
        'comment': req.body.comment
    }
    console.log('user.name is:', user.name);
    res.render('result',user)
});



// starting server
app.listen(8000, () => console.log("listening on port 8000"));