const {Task} = require('../models/task')

module.exports = {
    index: (req,res) => {
        Task.find()
        .then(tasks => {
            res.json(tasks)
        })
        .catch(err => {
            res.send('Error!')
        })
    },
    create: (req,res) => {
        const newTask = new Task();
        newTask.title = req.body.title
        newTask.description = req.body.description
        newTask.complete = req.body.complete
        newTask.save()
            .then(newTask => {
                console.log('Successfully created ', newTask)
                res.json(newTask)
            })
            .catch(err => {
                console.log('Error saving new Task: ', err);
                for (var key in err.errors){
                    req.flash('registration', err.errors[key].message);
                }
                res.redirect('/');
            })
    },
    show: (req,res) => {
        Task.findOne({_id: req.params.id})
        .then(task => {
            // console.log('Successss')
            res.json({task:task})
        })
        .catch(error => {
            console.log('Error: ', error)
            res.redirect('/')
        })
    },
    update: (req,res) => {
        Task.findOne({_id: req.params.id})
            .then(task => {
                task.title = req.body.title
                task.description = req.body.description
                task.complete = req.body.complete
                task.save()
                    .then(updatedTask => {
                        res.json(updatedTask)
                    })
                console.log('Successfully updated task')
            })
            .catch(error => {
                console.log('Error: ', error)
                res.send('Error saving changes: ', error)
            })
    },
    destroy: (req,res) => {
        Task.remove({_id:req.params.id})
            .then(() => {
                res.json('Success!')
            })
            .catch((error) => {
                console.log('Error deleting task:', error)
            })
    }
}