const chimps = require('../controllers/chimpanzees')

module.exports = function(app){
    app.get('/', (req,res) => {
        chimps.index(req,res)
    });
    
    app.get('/chimpanzees/new', (req,res) => {
        chimps.new(req,res)
    });
    
    app.post('/chimpanzees', (req,res) => {
        chimps.create(req,res)
    });
    
    app.get('/chimpanzees/edit/:id', (req,res) => {
        chimps.edit(req,res)
    });
    
    app.get('/chimpanzees/destroy/:id', (req,res) => {
        chimps.destroy(req,res)
    });
    
    app.get('/chimpanzees/:id', (req,res) => {
        chimps.show(req,res)
    });
    
    app.post('/chimpanzees/:id', (req,res) => {
        chimps.update(req,res)
    });
}
