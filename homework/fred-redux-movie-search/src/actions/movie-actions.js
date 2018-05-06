import axios from 'axios';

export const fetchMoviesType = 'FETCH_MOVIES';
export const fetchMoviesFulfilledType = 'FETCH_MOVIES_FULFILLED';

export function fetchMovies(movie) {
    return function(dispatch) {
        dispatch({ type: fetchMoviesType });

        axios.get(`http://www.omdbapi.com/?apikey=9c1996d3&s=${movie}`)
            .then(function(response) {
                dispatch({ type: fetchMoviesFulfilledType, payload: response.data.Search })
            });
    }
};