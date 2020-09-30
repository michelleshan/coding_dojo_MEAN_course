const {Author} = require('../models/author')

module.exports = {
    index: (req,res) => {
        Author.find()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.send('Error!', err)
        })
    },
    create: (req,res) => {
        const newAuthor = new Author();
        newAuthor.name = req.body.name
        newAuthor.save()
            .then(newAuthor => {
                res.json(newAuthor)
            })
            .catch(err => {
                res.send('Error saving new author ', err)
            })
    },
    show: (req,res) => {
        Author.findOne({_id: req.params.id})
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.send('Error locating author ', err)
            })
    },
    update: (req,res) => {
        Author.findOne({_id: req.params.id})
            .then(authorToUpdate => {
                authorToUpdate.name = req.body.name
                authorToUpdate.save()
                    .then(updatedAuthor => {
                        res.json(updatedAuthor)
                    })
                    .catch(err => {
                        res.send('Error updating author ', err)
                    })
            })
            .catch(err => {
                res.send('Error locating author to edit' , err)
            })
    },
    destroy: (req,res) => {
        Author.remove({_id: req.params.id})
            .then(() => {
                res.send('Successfully deleted author')
            })
            .catch(err => {
                res.send('Error deleting author', err)
            })
    },
}