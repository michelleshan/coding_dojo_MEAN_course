const {Comment} = require('../models/comment')
const {Message} = require('../models/message')

module.exports = {
    create: (req,res) => {
        const newComment = new Comment();
        newComment.user = req.body.user
        newComment.comment = req.body.comment
        newComment.save()
            .then(comment => {
                Message.findOneAndUpdate({_id: req.params.id}, {$push:{comments:comment}})
                    .then(updatedMessage => {
                        console.log('*****New comment successfully created!*****')
                        res.redirect('/')
                    })
            })
            
            .catch(err => {
                console.log('Error saving message: ', err)
                res.redirect('/')
            })
    }
}