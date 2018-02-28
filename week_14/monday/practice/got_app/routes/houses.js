var express = require('express');
var router = express.Router();
const House = require('../models/index').house;

router.get('/houses', function(req, res) {
    House.findAll()
        .then(function(houses) {
            res.send(houses);
        })
});

router.get('/:id', function(req, res) {
    House.findById(req.params.id)
        .then(function(house) {
            res.send(house)
        })
});

router.get('/:name/:sigil/:region', function(req, res) {
    const params = {
        name: req.params.name,
        sigil: req.params.name,
        region: req.params.name
    };
    House.create(params)
        .then(function(house) {
            res.send(house)
        })
});

module.exports = router;