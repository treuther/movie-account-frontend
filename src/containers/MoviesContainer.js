//class component because containr will handle state.

import React from 'react';
import {connect} from 'react-redux';
import {fetchMovies} from '../actions/fetchMovies';
import MovieInput from '../components/MovieInput';
import Movies from '../components/Movies';

class MoviesContainer extends React.Component {
    
    render() {
        return(
            <div>
                <MovieInput genre={this.props.genre}/>
                <Movies movies={this.props.genre && this.props.genre.movies}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        movies: state.mmovies
    }
}

export default connect(mapStateToProps, {fetchMovies})(MoviesContainer);