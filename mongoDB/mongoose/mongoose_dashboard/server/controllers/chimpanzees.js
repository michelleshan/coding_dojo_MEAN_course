const {Chimpanzee} = require('../models/chimpanzee')

module.exports = {
    index: (req,res) => {
        Chimpanzee.find()
        .then(chimpanzees => {
            res.render('index',{chimpanzees: chimpanzees})
        })
        .catch(err => {
            res.send('Error!')
        })
    },
    new: (req,res) => {
        res.render('new')
    },
    create: (req,res) => {
        const newChimp = new Chimpanzee();
        newChimp.name = req.body.name
        newChimp.age = req.body.age
        newChimp.sex = req.body.sex
        newChimp.fav_food = req.body.fav_food
        newChimp.save()
            .then(newChimp => {
                console.log('Successfully created ', newChimp)
                res.redirect('/')
            })
            .catch(err => {
                console.log('Error saving new chimp: ', err);
                for (var key in err.errors){
                    req.flash('registration', err.errors[key].message);
                }
                res.redirect('/chimpanzees/new');
            })
    },
    show: (req,res) => {
        Chimpanzee.findOne({_id: req.params.id})
        .then(chimpanzee => {
            // console.log('Successss')
            res.render('show',{chimpanzee:chimpanzee})
        })
        .catch(error => {
            console.log('Error: ', error)
            res.redirect('/')
        })
    },
    edit: (req,res) => {
        Chimpanzee.findOne({_id: req.params.id})
            .then(chimpp => {
                res.render('edit',{chimp:chimpp})
            })
            .catch(error => {
                console.log('Error saving edits: ', error)
            })
    },
    update: (req,res) => {
        Chimpanzee.findOne({_id: req.params.id})
            .then(chimp => {
                chimp.name = req.body.name
                chimp.age = req.body.age
                chimp.sex = req.body.sex
                chimp.fav_food = req.body.fav_food
                chimp.save()
                    .then(updatedChimp => {
                        res.redirect('/chimpanzees/'+updatedChimp._id)
                    })
                console.log('Successfully updated Chimp')
                res.redirect('/')
            })
            .catch(error => {
                console.log('Error: ', error)
                res.redirect('/chimpanzees/edit/:id')
            })
    },
    destroy: (req,res) => {
        Chimpanzee.remove({_id:req.params.id})
            .then(() => {
                res.redirect('/')
            })
            .catch((error) => {
                console.log('Error deleting user:', error)
            })
    }
}