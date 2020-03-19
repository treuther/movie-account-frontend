//class component because containr will handle state.

import React from 'react';
import {connect} from 'react-redux';
import {fetchMovies} from '../actions/fetchMovies';
import MovieInput from '../components/MovieInput';
import Movies from '../components/Movies';
import Genre from '../components/Genre';

class MoviesContainer extends React.Component {

    componentDidMount() {
        this.props.fetchMovies()
    }
    
    render() {
        return(
            <div>
                <MovieInput movie={this.props.movie} />
                <Movies movies={this.props.movies && this.props.movies} />
            </div>
        )
    }
}

// Genre.js is passing in genre over to MoviesContainer. Coming in as ownProp
const mapStateToProps = (state, ownProp) => {
    const movieGenre = ownProp.genre

    if(movieGenre) {
        return {
            movies: state.movies.movies.filter(movie => movie.genre_id == movieGenre.id)
        }
    } else {
        return {movies: state.movies.movies}
    }  
}

export default connect(mapStateToProps, {fetchMovies})(MoviesContainer);
// export default MoviesContainer;