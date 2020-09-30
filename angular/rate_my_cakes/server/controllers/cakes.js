const {Cake} = require('../models/cake')

module.exports = {
    index: (req,res) => {
        Cake.find()
        .then(cakes => {
            res.json(cakes)
        })
        .catch(err => {
            res.send('Error!')
        })
    },
    create: (req,res) => {
        const newCake = new Cake();
        newCake.baker = req.body.baker
        newCake.imageURL = req.body.imageURL
        newCake.save()
            .then(newCake => {
                console.log('Successfully created ', newCake)
                res.json(newCake)
            })
            .catch(err => {
                console.log('Error saving new Cake: ', err);
                for (var key in err.errors){
                    req.flash('registration', err.errors[key].message);
                }
                res.redirect('/');
            })
    },
    show: (req,res) => {
        console.log('in the show fxn')
        Cake.findOne({_id: req.params.id})
        .then(cake => {
            res.json(cake)
            console.log('I found it the one')
        })
        .catch(error => {
            console.log('Error: ', error)
            res.redirect('/')
        })
    },
    update: (req,res) => {
        Cake.findOne({_id: req.params.id})
            .then(cake => {
                cake.title = req.body.title
                cake.description = req.body.description
                cake.complete = req.body.complete
                cake.save()
                    .then(updatedCake => {
                        res.json(updatedCake)
                    })
                console.log('Successfully updated Cake')
            })
            .catch(error => {
                console.log('Error: ', error)
                res.send('Error saving changes: ', error)
            })
    },
    destroy: (req,res) => {
        Cake.remove({_id:req.params.id})
            .then(() => {
                
            })
            .catch((error) => {
                console.log('Error deleting Cake:', error)
            })
    }
}