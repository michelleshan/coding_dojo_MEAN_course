const quotes = require('../controllers/quotes')

module.exports = function(app){
    app.get('/', (req,res) => {
        quotes.index(req,res)
    });
    
    app.post('/addQuote', (req,res) => {
        quotes.create(req,res)
    });
    
    app.get('/quotes', (req,res) => {
        quotes.show(req,res)
    });
    
    app.get('/quotes/:id/destroy', (req,res) => {
        quotes.destroy(req,res)
    });
}