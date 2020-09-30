const {Message} = require('../models/message')

module.exports = {
    index: (req,res) => {
        Message.find()
            .then(messages => {
                res.render('index',{messages:messages})
            })
            .catch(err => {
                res.send('Error!')
            })
    },
    create: (req,res) => {
        const newMessage = new Message();
        newMessage.user = req.body.user
        newMessage.message = req.body.message
        newMessage.save()
            .then(message => {
                console.log('*****New message successfully created!*****')
                res.redirect('/',{message:message})
            })
            .catch(err => {
                console.log('Error saving message: ', err)
                res.redirect('/')
            })
    },
    // destroy: (req,res) => {

    // }
}