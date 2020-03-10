//class component because containr will handle state.

import React from 'react';
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

export default MoviesContainer;