const express = require('express');
const logger = require('morgan');
const app = express();
const pokemon = require('./data/poke_array');

app.use(logger('dev'));


app.get('/pokemons', function(req, res) {  
    res.send(pokemon);
});

app.get('/pokemons/byName/:name', function (req, res) {
    const name = req.params.name;

    for(let i = 0; i < pokemon.length; i++) {
        if(pokemon[i].name.toLowerCase() === name) {
            res.send(pokemon[i]);
        }
    }
});

app.get('/pokemons/byType/:type', function(req, res) {
    const type = req.params.type;
    const result = pokemon.filter(function(poke) {
        return poke.type.includes(type);
    });

    res.send(result);
});

app.get('/pokemons/random', function(req, res) {
    const index = Math.floor(Math.random() * pokemon.length);
    res.send(pokemon[index]);
});

app.get('/pokemons/:id', function(req, res) {
    const id = req.params.id;
    const result = pokemon.find(function(poke) {
        return poke.id === id;
    })

    res.send(result);
});

app.listen(3000);