import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MovieList from './movie-list';
import * as movieActions from '../actions/movie-actions';

class MovieListApp extends Component {
    constructor(props) {
        super(props)
        
        this.handleMovieSearch = this.handleMovieSearch.bind(this);
    }

    handleMovieSearch() {
        const movieSearched = document.getElementById('search-input').value;
        this.props.movieActions.fetchMovies(movieSearched);
    }

    render() {
        return (
            <div>
                <input id='search-input' />
                <button onClick={this.handleMovieSearch}>Search</button>
                <h1>Movie List</h1>
                <MovieList movies={this.props.movies}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
       movies: state.movies
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        movieActions: bindActionCreators(movieActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieListApp);