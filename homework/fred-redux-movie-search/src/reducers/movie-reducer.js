import { fetchMoviesFulfilledType } from '../actions/movie-actions';

const initialState = {
    movies: []
};

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case fetchMoviesFulfilledType:
            return {
                ...state,
                movies: action.payload
            }
        default:
            return state;
    }
}