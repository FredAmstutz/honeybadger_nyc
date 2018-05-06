import React, { Component } from 'react';


class MovieList extends Component {
    render() {
        const movieTitles = this.props.movies.map(function(movie) {
            return <li key={movie.imdbID}>{movie.Title}</li>;
        })

        return (
            <ul>
                {movieTitles}
            </ul>
        )
    }
}

export default MovieList;