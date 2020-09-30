const users = require('../controllers/users')
const races = require('../controllers/races')
const path = require('path')

module.exports = function(app){

// USERS

    app.get('/user', (req,res) => {
        users.index(req,res)
    });
    
    app.post('/user', (req,res) => {
        users.create(req,res)
    });
    
    app.delete('/user/destroy/:id', (req,res) => {
        users.destroy(req,res)
    });
    
    app.get('/user/:id', (req,res) => {
        users.show(req,res)
    });
    
    app.put('/user/:id', (req,res) => {
        users.update(req,res)
    });

    app.get('/session/:id', (req,res) => {
        users.session(req,res)
    });

// RACES

    app.get('/race', (req,res) => {
        races.index(req,res)
    });
    
    app.post('/race', (req,res) => {
        races.create(req,res)
    });
    
    app.delete('/race/destroy/:id', (req,res) => {
        races.destroy(req,res)
    });
    
    app.get('/race/:id', (req,res) => {
        races.show(req,res)
    });
    
    app.put('/race/:id', (req,res) => {
        races.update(req,res)
    });

    app.get('*', (req,res) => {
        console.log('not in any valid route')
        res.sendFile(path.join(__dirname+'../../../public/dist/public/index.html'))
    })
}
