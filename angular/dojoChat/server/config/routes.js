// const authors = require('../controllers/authors')

module.exports = function(app){
    app.get('/', (req,res) => {
        console.log('in / route')
    });
}
