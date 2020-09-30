// imports
const express = require('express');
const app = express();
const ejs = require('ejs');
const mongoose = require('mongoose');

// settings
mongoose.connect('mongodb://localhost/name_of_your_DB', {useNewURLParser: true});
app.use(express.static(__dirname + '/static'));
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs')
app.set('views', __dirname+ '/views')

const UserSchema = new mongoose.Schema({
    name: String,
    age: Number
})

const User = mongoose.model('User', UserSchema)

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