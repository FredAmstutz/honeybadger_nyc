const express = require('express');
const logger = require('morgan');
const app = express();

app.use(logger('dev'));

app.get('/about', function(req, res) {
    res.send('Hello, welcome to the joke application. This a test exercise for getting data from a server.');
});

app.get('/bananas', function(req, res) {
    res.send('What did the old banana say to the young banana? Nothing. They are bananas.');
});

app.get('/joke', function(req, res) {
    res.send('Random funny joke');
});

app.get('/personalJoke/:name', function(req, res) {
    const person = req.params.name;

    res.send(`Hey ${person}, nice hat idiot!`);
});

app.listen();