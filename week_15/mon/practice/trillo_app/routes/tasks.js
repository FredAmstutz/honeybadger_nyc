var express = require('express');
var router = express.Router();
const Task = require('../models/index').task;

//INDEX
router.get('/', function(req, res) {
    Task.findAll()
        .then(function(tasks) {
            res.send(tasks)
        });
});

//SHOW
router.get('/:id', function(req, res) {
    Task.findById(req.params.id)
        .then(function(tasks) {
            res.send(task)
        });
});

//CREATE
router.post('/', function(req, res) {
    console.log(req.body);
    const body = {
        description: req.body.description,
        is_done: false,
        is_deleted: false
    }
    Task.create(body)
        .then(function(task) {
            res.send(task)
        });
});

//DELETE
router.put('/delete/:id', function(req, res) {
    Task.findById(req.params.id)
        .then(function(task) {
            task.update({is_deleted: true})
                .then(function(task) {
                    res.send(task)
                });
        });
});

//FINISH
router.put('/done/:id', function(req, res) {
    Task.findById(req.params.id)
        .then(function(task) {
            task.update({is_done: true})
                .then(function(task) {
                    res.send(task)
                });
        });
});

module.exports = router;
