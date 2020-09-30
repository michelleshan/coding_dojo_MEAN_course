const tasks = require('../controllers/tasks')

module.exports = function(app){
    app.get('/tasks', (req,res) => {
        tasks.index(req,res)
    });
    
    app.post('/task', (req,res) => {
        tasks.create(req,res)
    });
    
    app.delete('/task/destroy/:id', (req,res) => {
        tasks.destroy(req,res)
    });
    
    app.get('/task/:id', (req,res) => {
        tasks.show(req,res)
    });
    
    app.put('/task/:id', (req,res) => {
        tasks.update(req,res)
    });
}
