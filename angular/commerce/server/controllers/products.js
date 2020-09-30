const {Product} = require('../models/product')

module.exports = {
    index: (req,res) => {
        Product.find()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.send('Error!', err)
        })
    },
    create: (req,res) => {
        const newProduct = new Product();
        newProduct.name = req.body.name
        newProduct.quantity = req.body.quantity
        newProduct.price = req.body.price
        newProduct.save()
            .then(newProduct => {
                res.json(newProduct)
            })
            .catch(err => {
                res.json(err)
                // for (var key in err.errors){
                //     req.flash('Creation error', err.errors[key].message);
                // }
            })
    },
    show: (req,res) => {
        Product.findOne({_id: req.params.id})
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.send('Error locating product ', err)
            })
    },
    update: (req,res) => {
        Product.findOne({_id: req.params.id})
            .then(productToUpdate => {
                productToUpdate.name = req.body.name
                productToUpdate.quantity = req.body.quantity
                productToUpdate.price = req.body.price
                productToUpdate.save()
                    .then(updatedProduct => {
                        res.json(updatedProduct)
                    })
                    .catch(err => {
                        res.json(err)
                    })
            })
            .catch(err => {
                res.json(err)
            })
    },
    destroy: (req,res) => {
        Product.remove({_id: req.params.id})
            .then(() => {
                res.json('Successfully deleted product')
            })
            .catch(err => {
                res.json('Error deleting product', err)
            })
    },
}