const {Rating} = require('../models/rating')
const {Cake} = require('../models/cake')

module.exports = {
    // index: (req,res) => {
    //     Rating.find()
    //     .then(ratings => {
    //         res.json(ratings)
    //     })
    //     .catch(err => {
    //         res.send('Error!')
    //     })
    // },
    create: (req,res) => {
        const newRating = new Rating();
        newRating.stars = req.body.stars
        newRating.comment = req.body.comment
        newRating.save()
            .then(rating => {
                Cake.findOneAndUpdate({_id: req.params.id}, {$push:{ratings:rating}})
                    .then(updatedCake => {
                        console.log('*****New Rating successfully created!*****')
                        res.redirect('/')
                    })
            })
            
            .catch(err => {
                console.log('Error saving message: ', err)
                res.redirect('/')
            })
        },
    // show: (req,res) => {
    //     Rating.findOne({_id: req.params.id})
    //     .then(rating => {
    //         // console.log('Successss')
    //         res.json({rating:rating})
    //     })
    //     .catch(error => {
    //         console.log('Error: ', error)
    //         res.redirect('/')
    //     })
    // },
    // update: (req,res) => {
    //     Rating.findOne({_id: req.params.id})
    //         .then(rating => {
    //             rating.title = req.body.title
    //             rating.description = req.body.description
    //             rating.complete = req.body.complete
    //             rating.save()
    //                 .then(updatedRating => {
    //                     res.json(updatedRating)
    //                 })
    //             console.log('Successfully updated rating')
    //         })
    //         .catch(error => {
    //             console.log('Error: ', error)
    //             res.send('Error saving changes: ', error)
    //         })
    // },
    // destroy: (req,res) => {
    //     Rating.remove({_id:req.params.id})
    //         .then(() => {
                
    //         })
    //         .catch((error) => {
    //             console.log('Error deleting Rating:', error)
    //         })
    // }
}