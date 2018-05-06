import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import MovieListApp from './components/movie-list-app';

ReactDOM.render(
    <Provider store={store}>
        <MovieListApp />
    </Provider>, document.getElementById('root')
);