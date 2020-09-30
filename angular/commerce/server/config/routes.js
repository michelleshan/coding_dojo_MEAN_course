const products = require('../controllers/products')
const path = require('path')

module.exports = function(app){
    app.get('/product', (req,res) => {
        products.index(req,res)
    });
    
    app.post('/product', (req,res) => {
        products.create(req,res)
    });
    
    app.delete('/product/destroy/:id', (req,res) => {
        products.destroy(req,res)
    });
    
    app.get('/product/:id', (req,res) => {
        products.show(req,res)
    });
    
    app.put('/product/:id', (req,res) => {
        products.update(req,res)
    });

    app.get('*', (req,res) => {
        console.log('not in any valid route')
        res.sendFile(path.join(__dirname+'../../../public/dist/public/index.html'))
    })
}
