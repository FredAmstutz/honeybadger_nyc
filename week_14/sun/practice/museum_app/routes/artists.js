var express = require('express');
var router = express.Router();
const Artist = require('../models/index').artist;

function getBodyParams(req) {
    const { name, image_url, nationality, birthYear, description } = req.body;
    return params = {
        name,
        image_url,
        nationality,
        birthYear,
        description
    };
};

// INDEX
router.get('/', function(req, res) {
    Artist.findAll()
        .then(function(artists) {
            res.send(artists)
        });
});

// SHOW
router.get('/:id', function(req, res) {
    Artist.findById(req.params.id)
        .then(function(artist) {
            res.send(artist)
        });
});

// CREATE
router.post('/', function(req, res) {
    Artist.create(getBodyParams(req))
        .then(function(artist) {
            res.send(artist)
        });
});

// UPDATE
router.put('/:id', function(req, res) {
    Artist.findById(req.params.id)
        .then(function(artist) {
            artist.update(getBodyParams(req))
                .then(function(artist) {
                    res.send(artist)
                });
        });
});

// DESTROY
router.delete('/:id', function(req, res) {
    Artist.findById(req.params.id)
        .then(function(artist) {
            artist.destroy();
            console.log('Artist destroyed');
        });
});

module.exports = router;
