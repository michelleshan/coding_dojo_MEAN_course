const names = require('../controllers/names')

module.exports = function(app){
    app.get('/', (req,res) => {
        names.index(req,res)
    });
    
    app.get('/new/:name', (req,res) => {
        names.create(req,res)
    });
    
    app.get('/remove/:name', (req,res) => {
        names.destroy(req,res)
    });

    app.get('/:name', (req,res) => {
        names.show(req,res)
    });
}