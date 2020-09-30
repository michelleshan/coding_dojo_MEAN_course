const {User} = require('../models/user')
const {Pants} = require('../models/pant')
const bcrypt = require('bcrypt');

module.exports = {
    index: (req,res) => {
        User.find()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
    },

    login: (req,res) => {
        res.render('login.ejs')
    },

    processLogin: (req,res) => {
        User.findOne({name:req.body.name})
        .then(user => {
            bcrypt.compare(req.body.password,user.password)
                .then(result => {
                    if(result){
                        req.session.name = user.name
                        res.redirect('/foreach')
                    }
                    else{
                        console.log('failed login attempt')
                        res.redirect('/login')
                    }
                    console.log(`logging in ${user.name}, result is ${result}`)
                })
        })
        .catch(err => {
            console.log('error: ', err)
            res.redirect('/login')
        })
    },

    new: (req,res) => {
        res.render('new')
    },

    show: (req,res) => {
        User.findOne({_id: req.params.id})
            .then(data => {
                res.json(data)
            })
            .catch(error => {
                console.log('Error saving user:', err)
            })
    },

    create: (req,res) => {
        const newPants = new Pants();
        newPants.color = req.body.color
        newPants.material = req.body.material
        newPants.save()
            .then(pants => {
                const user = new User();
                user.name = req.body.name
                user.age = req.body.age
                bcrypt.hash(req.body.password, 10)
                    .then(hashed_password => {
                        user.password = hashed_password
                        user.pants.push(pants)
                        user.save() // {name: from the form, age: from the form}
                            .then(newUser => {
                            console.log('We created:', newUser)
                            })
                    })
                    res.redirect('/')
            })
            .catch(err => {
                console.log('Error saving user:', err)
                res.redirect('/')
            }) 
    },

    edit: (req,res) => {
        User.findOne({_id: req.params.id})
            .then(data => {
                res.render('edit.ejs',{
                    user:{
                        _id: data._id,
                        name: data.name,
                        age: data.age
                    }})
            })
            .catch(error => {
                console.log('Error saving user:', err)
            })
    },

    update: (req,res) => {
        User.findOne({_id:req.params.id})
        .then(user => {
            user.name = req.body.name
            user.age = req.body.age
            user.save()
                .then(updatedUser => {
                    res.redirect('/users/'+updatedUser._id)
                })
        })
        .catch(err => {
            console.log('Error saving user:', err)
        })
    },

    destroy: (req,res) => {
        User.remove({_id:req.params.id})
            .then(() => {
                res.redirect('/')
            })
            .catch((err) => {
                console.log('Error saving user:',err)
            })
    },

    index2: (req,res) => {
        User.findOne({name:req.session.name})
            .then(currentUser => {
                if (currentUser == null){
                    currentUser = {name: 'Please log in'}
                }
                console.log('current user is :', currentUser)
            User.find()
            .then(users => {
                res.render('foreach.ejs', {users:users, currentUser:currentUser})
            })
            .catch(err => {
                console.log('Error saving user:', err)
            })
            
        })
    },
}