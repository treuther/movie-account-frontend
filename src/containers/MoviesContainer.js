//class component because containr will handle state.

import React from 'react';
import {connect} from 'react-redux';
import {fetchMovies} from '../actions/fetchMovies';
import MovieInput from '../components/MovieInput';
import Movies from '../components/Movies';
import {Button} from 'react-bootstrap';

class MoviesContainer extends React.Component {

    // Mounting phase. Immediately invoked after the component is mounted in the DOM
    componentDidMount() {
        this.props.fetchMovies() //performs fetchMovies() to this.props
    }

    //The only required method for class components
    render() {
        let currentPath = window.location.pathname;
        return(
            <div>
                {!currentPath.includes('/movies') ? <MovieInput genre={this.props.genre} /> : null }
                <hr/>
                {/* && = Came from project prep page. SEE NOTES BELOW */}
                <Movies movies={this.props.movies && this.props.movies} genre={this.props.genre} />
            </div>
        )
    }
}

// Genre.js is passing in genre over to MoviesContainer. Coming in as ownProp
// ownProps is an optional 2nd argument
// ownProps receives the props object of the wrapper component (Genre.js)
// Genre.js is the wrapper component for the Movies Container
const mapStateToProps = (state, ownProps) => {
    const movieGenre = ownProps.genre

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



// NOTES ON USE OF &&
// Project Handy Tools & Resources:
//https://stackoverflow.com/questions/50845894/reactjs-typeerror-cannot-read-property-map-of-undefined
// One can use the conditional rendering to render your movies.
// Therefore if movies is undefined the right operand of the and operator
// (&&) will not be rendered