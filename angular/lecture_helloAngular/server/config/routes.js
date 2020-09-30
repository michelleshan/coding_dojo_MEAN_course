module.exports = function(app){

    app.get('/', (req,res) => {
        console.log('new connection')
    })

    app.get('/api/tasks', (req,res) => {
        console.log('someone asked for tasks');
        res.json([{name:'dishes'},{name:'mop the floor'}])
    })

    app.post('/api/tasks', (req,res) => {
        console.log('received new task', task);
        res.json([{name:'dishes'},{name:'mop the floor'}])
    })
}