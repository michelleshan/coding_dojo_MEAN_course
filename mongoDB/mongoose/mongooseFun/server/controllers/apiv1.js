const {User,Pants} = require('..//models/users')
const bcrypt = require('bcrypt');

module.exports = {

    apiIndex: (req,res) => {
        User.find()
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.json(err)
            })
    },

    apiCreate: (req,res) => {
        console.log('received api request for new user')
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
                            // console.log('We created:', newUser)
                            })
                    })
                    res.json(newUser)
            })
            .catch(err => {
                // console.log('Error saving user:', err)
                res.json(err)
            }) 
    }
}