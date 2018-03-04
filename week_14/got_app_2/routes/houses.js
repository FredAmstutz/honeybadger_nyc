var express = require('express');
var router = express.Router();
const house = require('../models/index').house;

function getBodyParams(req) {
    const { name, sigil, region } = req.body;
    return params = {
        name,
        sigil,
        region
    }
};

//INDEX
router.get('/', function(req, res, next) {
    house.findAll()
        .then(function(houses) {
            res.send(houses);
    });
});

//SHOW
router.get('/:id', function(req, res) {
    house.findById(req.params.id)
        .then(function(house) {
            res.send(house);
        });
});

//CREATE
router.post('/', function(req, res, next) {
    house.create(getBodyParams(req))
        .then(function(house) {
            res.send(house)
        });
});

//UPDATE
router.put('/:id', function(req, res) {
    house.findById(req.params.id)
        .then(function(house) {
            house.update(getBodyParams(req))
                .then(function(house) {
                    res.send(house);
                });
        });
});

//DESTROY
router.delete('/:id', function(req, res) {
    house.findById(req.params.id)
        .then(function(house) {
            house.destroy();
            console.log('House destroyed.');
        });
});

module.exports = router;