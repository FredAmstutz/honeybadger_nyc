var express = require('express');
var router = express.Router();
const Painting = require('../models/index').painting;

function getBodyParams(req) {
    const { title, img_url, year_made } = req.body;
    return params = {
        title,
        img_url,
        year_made
    };
};

//INDEX
router.get('/', function(req, res) {
    Painting.findAll()
        .then(function(paintings) {
            res.send(paintings)
        });
});

//SHOW
router.get('/:id', function(req, res) {
    Painting.findById(req.params.id)
        .then(function(painting) {
            res.send(painting)
        });
});

//CREATE
router.post('/', function(req, res) {
    Painting.create(getBodyParams(req))
        .then(function(painting) {
            res.send(painting)
        });
});

//UPDATE
router.put('/:id', function(req, res) {
    Painting.findById(req.params.id)
        .then(function(painting) {
            painting.update(getBodyParams(req))
                .then(function(painting) {
                    res.send(painting)
                });
        });
});

//DESTROY
router.delete('/:id', function(req, res) {
    Painting.findById(req.params.id)
        .then(function(painting) {
            painting.destroy();
            console.log('Painting destroyed');
        });
});

module.exports = router;
