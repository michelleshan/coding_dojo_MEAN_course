const cakes = require('../controllers/cakes')
const ratings = require('../controllers/ratings')

module.exports = function(app){
    app.get('/cakes', (req,res) => {
        cakes.index(req,res)
    });
    
    app.post('/cake', (req,res) => {
        cakes.create(req,res)
    });
    
    app.post('/rating/:id', (req,res) => {
        ratings.create(req,res)
    })

    app.delete('/cake/destroy/:id', (req,res) => {
        cakes.destroy(req,res)
    });
    
    app.get('/cake/:id', (req,res) => {
        cakes.show(req,res)
    });
    
    // app.put('/cake/:id', (req,res) => {
    //     cakes.update(req,res)
    // });
}
