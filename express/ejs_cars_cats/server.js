// imports
const express = require('express');
const app = express();
const ejs = require('ejs');

// settings
app.use(express.static(__dirname + '/static'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')

// routing
app.get('/', (req, res) => {
    res.render('index');
});
// app.get('/cars', (req, res) => {
//     res.render('cars');
// });
app.get('/cats', (req, res) => {
    res.render('cats');
});
// app.get('/cars/new', (req, res) => {
//     res.render('form');
// });
app.get('/jeffrey', (req, res) => {
    context = {
        'name': 'Jeffrey',
        'age': 3,
        'food': 'Spaghetti & Meatballs',
        'pic': 'images/cutie2.jpeg',
        'spots': ['On the couch', 'In a sunbeam']
    }
    res.render('cat_info',context);
});
app.get('/shoopy', (req, res) => {
    context = {
        'name': 'Shoopy',
        'age': '8 weeks',
        'food': 'Fresh milk',
        'pic': 'images/cutie3.jpg',
        'spots': ['In your lap', 'By the window', 'On satin sheets']
    }
    res.render('cat_info',context);
});
app.get('/meowey', (req, res) => {
    context = {
        'name': 'Meowey',
        'age': '10 months',
        'food': 'Cheese',
        'spots': ['On the roof', 'Outside in the grass'],
        'pic': 'images/cutie1.jpeg'
    }
    res.render('cat_info',context);
});
app.get('/kracken', (req, res) => {
    context = {
        'name': 'Kracken',
        'age': 8,
        'food': 'Used socks',
        'spots': ['Around your neck'],
        'pic': 'images/cutie4.jpg'
    }
    res.render('cat_info',context);
});

// starting server
app.listen(8000, () => console.log('listening on port 8000'));