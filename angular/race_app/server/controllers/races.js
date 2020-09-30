const {Race} = require('../models/race')

module.exports = {
    index: (req,res) => {
        Race.find()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.send('Error!', err)
        })
    },
    create: (req,res) => {
        const newRace = new Race();
        newRace.date = req.body.date
        newRace.distance = req.body.distance
        newRace.race_name = req.body.race_name
        newRace.save()
            .then(newRace => {
                res.json(newRace)
            })
            .catch(err => {
                res.json(err)
            })
    },
    show: (req,res) => {
        Race.findOne({_id: req.params.id})
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.status('Error locating race ', err)
            })
    },
    update: (req,res) => {
        Race.findOne({_id: req.params.id})
            .then(raceToUpdate => {
                raceToUpdate.date = req.body.date
                raceToUpdate.distance = req.body.distance
                raceToUpdate.save()
                    .then(updatedRace => {
                        res.json(updatedRace)
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
        Race.remove({_id: req.params.id})
            .then(() => {
                res.json('Successfully deleted race')
            })
            .catch(err => {
                res.json('Error deleting race', err)
            })
    },
}