const authors = require('../controllers/authors')
const path = require('path')

module.exports = function(app){
    app.get('/authors', (req,res) => {
        authors.index(req,res)
    });
    
    app.post('/author', (req,res) => {
        authors.create(req,res)
    });
    
    app.delete('/author/destroy/:id', (req,res) => {
        authors.destroy(req,res)
    });
    
    app.get('/author/:id', (req,res) => {
        authors.show(req,res)
    });
    
    app.put('/author/:id', (req,res) => {
        authors.update(req,res)
    });

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}
