const getMovies = require('./get-movies.js');

getMovies().then(function(data) {
    console.log(data)
});


