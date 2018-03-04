var express = require('express');
var router = express.Router();
const weapon = require('../models/index').weapon;

router.get('/', function(req, res) {
    weapon.findAll().then(function(weapons) {
        res.send(weapons)
    });
});

router.post('/', function(req, res, next) {
    body = {
        name: req.body.name,
        material: req.body.material,
        damage: req.body.damage,
        accuracy: req.body.accuracy
    }

    weapon.create(body)
        .then(function(weapon) {
            res.send(weapon)
        });
});

module.exports = router;