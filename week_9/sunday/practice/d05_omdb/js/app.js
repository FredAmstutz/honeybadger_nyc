$(function() {
    var $resultsContainer = $('#results-container');

    $resultsContainer.on('click', '.movie', function() {
        const imdbID = $(this).data('id');
        getMovieData({i: imdbDB, apikey: '1d747e12'}).then(function(data) {
            console.log(data);
        })
    })

    function getMovieData(options) {
        const result = $.ajax({
            url: 'http://www.omdbapi.com/',
            data: options
        })

        return result;
    }

    function normalizedMovies (data) {
        const movieData = data.Search;

        const normalizedMovies = movieData.map(function(movie) {
            const { Poster: poster, Title: title, imdbID } = movie;

            return {
                poster,
                title,
                imdbID
            }
        })

        return normalizedMovies;
    }

    function renderMovies (moviesToRender) {
        $resultsContainer.empty();

        moviesToRender.forEach(function (movie) {
            const { poster, title, imdbID } = movie;
            const template = `
                <div class="movie" data-id="${imdbID}">
                    <h1>${title}</h1>
                    <img src="${poster}" alt="${title}">
                </div>
            `;

            $resultsContainer.append(template);
        })
    }

    getMovieData(options, { s: 'Batman'})
        .then(normalizedMovies)
        .then(renderMovies)
});




    // ALL MY ATTEMPT  *****************************************************************
    // const $searchButton = $('#search-button');
    // const $searchResults = $('#search-results');

    // function getMovieData() {
    //     const $movie = $('#search-input').val();
    //     const result = $.ajax({
    //         url: 'http://www.omdbapi.com/',
    //         data: {
    //             apikey: '1d747e12',
    //             s: $movie,
    //             type: 'movie'
    //         },
    //         method: 'GET',
    //         dataType: 'json'
    //     });

    //     result.then(function(data) {
    //         const movieTitles = data.Search.map(function(item) {
    //             const titleList = `
    //                 <h1>${item.Title}</h1>
    //             `
    //             return titleList;
    //         });
    //         const movieImdbIds = data.Search.map(function(item) {
    //             const imdbIDList = `
    //                 <p>${item.imdbID}</p>
    //             `
    //             return imdbIDList;
    //         });
    //         $searchResults.append(movieTitles, movieImdbIds);
    //     });
    // }

    // $searchButton.on('click', function() {
    //     getMovieData();
    // });