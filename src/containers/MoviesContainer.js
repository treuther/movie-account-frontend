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
   
                {/* Movie Input also needs to associate with Genre */}
                <MovieInput movie={this.props.movie} />

                {/* <Movies movies={this.props.genres && this.props.genres} /> */}
                {/* <MovieInput genre={this.props.genre}/>*/}
                {/* <Movies movies={this.props.genre && this.props.genre.movies}/> */}
                {/* <Movies genres={this.props.genres.movies.map(movie => movie.title).flat()}/> */}
                {/* <Movies genres={this.props.genres && this.props.genres.map(genre => genre.movies)}/> */}

                {/* This needs an conditional: if path is genre, then show correct movies with genre. If path
                = movies, then list all movies. */}
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