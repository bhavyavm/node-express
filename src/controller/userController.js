var User = require('../models/user.js');
exports.getAllusers = function (req, res) {
    User.getAllusers(function (err, result) {
        console.log('controller')
        if (err)
            res.send(err);
        res.send(result);
    })
};
exports.createUser = function (req, res) {
    var new_task = new User(req.body);
    if (!new_task.task || !new_task.status) {
        res.status(400).send({ error: true, message: 'Please provide task/status' });
    }
    else {
        Task.createTask(new_task, function (err, task) {
            if (err)
                res.send(err);
            res.json(task);
        });
    }
}
