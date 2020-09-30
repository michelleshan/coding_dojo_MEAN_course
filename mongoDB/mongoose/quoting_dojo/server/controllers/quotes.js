const {Quote} = require('..//models/quotes')

module.exports = {
    index: (req,res) => {
        res.render('index')
    },

    create: (req,res) => {
        const newQuote = new Quote();
        newQuote.name = req.body.name
        newQuote.quote = req.body.quote
        newQuote.save()
            .then(newQuote => {
                console.log('We created: ', newQuote)
                res.redirect('/quotes')
            })
            .catch(err => {
                console.log('Error saving quote: ', err)
                res.redirect('/')
            })
    },

    show: (req,res) => {
        Quote.find()
            .sort({created_at:-1})
            .then(data => {
                res.render('quotes', {quotes: data})
            })
            .catch(err => {
                res.json(err)
            })
    },

    destroy: (req,res) => {
        Quote.remove({_id:req.params.id})
            .then(() => {
                res.redirect('/quotes')
            })
            .catch((err) => {
                console.log('Error deleting quote: ', err)
            })
    },
}