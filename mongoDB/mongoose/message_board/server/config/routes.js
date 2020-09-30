const messages = require('../controllers/messages')
const comments = require('../controllers/comments')

module.exports = function(app){
    app.get('/', (req,res) => {
        messages.index(req,res)
    });
    
    app.post('/messages', (req,res) => {
        messages.create(req,res)
    });
    
    app.post('/comments/:id', (req,res) => {
        comments.create(req,res)
    })
}
