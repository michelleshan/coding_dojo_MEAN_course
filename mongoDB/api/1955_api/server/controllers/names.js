const {Name} = require('../models/name')

module.exports = {
    index: (req,res) => {
        Name.find()
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.json(err)
            })
    },

    create: (req,res) => {
        const newName = new Name();
        newName.name = req.params.name
        newName.save()
            .then(newName => {
                console.log('We created: ', newName)
                res.redirect('/')
            })
            .catch(err => {
                console.log('Error saving name: ', err)
                res.redirect('/')
            })
    },

    show: (req,res) => {
        Name.findOne({name: req.params.name})
            .then(data => {
                res.json({name: data})
            })
            .catch(err => {
                res.json(err)
            })
    },

    destroy: (req,res) => {
        Name.remove({name:req.params.name})
            .then(() => {
                console.log('deleted user', name)
                res.redirect('/')
            })
            .catch((err) => {
                console.log('Error deleting name: ', err)
            })
    },
}