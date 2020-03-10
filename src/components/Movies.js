//functional component because it receives prop

import React from 'react';

const Movies = (props) => {

    return (
        <div>
            {props.movies && props.movies.map(movie => 
                    <li key={movie.id}>{movie.title} - {movie.rating} - {movie.description}</li>
                )}
        </div>
    )
}

export default Movies;