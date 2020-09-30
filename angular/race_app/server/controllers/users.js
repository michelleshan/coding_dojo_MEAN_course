const {User} = require('../models/user');
const bcrypt = require('bcrypt');

module.exports = {
    index: (req,res) => {
        User.find()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.send('Error!', err)
        })
    },
    create: (req,res) => {
        const newUser = new User();
        newUser.first_name = req.body.first_name
        newUser.last_name = req.body.last_name
        newUser.email = req.body.email
        if (req.body.password == req.body.confirm_password){
            console.log('PASSWORD MATCHES')
            bcrypt.hash(req.body.password, 10)
            .then(hashed_password => {
                newUser.password = hashed_password
                newUser.save()
                .then(newUser => {
                    res.json(newUser)
                })
                .catch(err => {
                    res.json(err)
                })
            })
        }
        else{
            console.log('password no match')
            res.json('Error! Password confirmation must match')
        }
    },
    session: (req,res) => {
        User.findOne({email: req.body.email})
            .then(user => {
                bcrypt.compare(req.body.password, user.password)
                    .then(result => {
                        if(result){
                            req.session.id = user._id
                            console.log(user)
                            res.json(user)
                        }
                        else{
                            console.log('failed login attempt')
                        }
                    })
            })
            .catch(err => {
                res.json(err)
            })
    },
    show: (req,res) => {
        User.findOne({_id: req.params.id})
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.send('Error locating user ', err)
            })
    },
    update: (req,res) => {
        User.findOne({_id: req.params.id})
            .then(userToUpdate => {
                userToUpdate.first_name = req.body.first_name
                userToUpdate.last_name = req.body.last_name
                userToUpdate.email = req.body.email
                userToUpdate.password = req.body.password
                userToUpdate.save()
                    .then(updatedUser => {
                        res.json(updatedUser)
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
        User.remove({_id: req.params.id})
            .then(() => {
                res.json('Successfully deleted user')
            })
            .catch(err => {
                res.json('Error deleting user', err)
            })
    },
}