//class component because containr will handle state.

import React from 'react';
import MovieInput from '../components/MovieInput';

class MoviesContainer extends React.Component {
    
    render() {
        return(
            <div>
                <MovieInput />
            </div>
        )
    }
}

export default MoviesContainer;