var express = require('express');
var router = express.Router();
const human = require('../models/index').human;

router.get('/', function(req, res) {
    human.findAll().then(function(humans) {
        res.send(humans)
    });
});

router.post('/', function(req, res, next) {
    const body = {
        name: req.body.name,
        age: req.body.age,
        status: req.body.status,
        portrait: req.body.portrait
    }
    human.create(body)
        .then(function(human) {
            res.send(human)
        });
});

module.exports = router;