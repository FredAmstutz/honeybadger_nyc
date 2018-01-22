const express = require('express');
const logger = require('morgan');
const app = express();

app.use(logger('dev'));

app.get('/add/:num1/:num2', function(req, res) {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);
    const total = (num1 + num2).toString();

    res.send(total);
});

app.get('/subtract/:num1/:num2', function(req, res) {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);
    const total = (num1 - num2).toString();

    res.send(total);
});

app.get('/divide', function(req, res) {

});

app.get('/multiply', function(req, res) {

});

app.listen(3000);