const express = require('express');
const logger = require('morgan');
const app = express();

app.use(logger('dev'));

app.get('/', function(req, res) {
    res.send('Hello');
});

app.get('/sayHello', function(req, res){
    const name = req.query.name;

    res.send(`Hello ${name}`);
});

app.get('/teamName/:name', function(req, res) {
    const teamName = req.params.name;

    res.send(`LETS GO ${teamName}`);
});

//app.listen(3000);