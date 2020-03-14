import React from 'react';

const Movie = (props) => {

    return (
        <div>
            {props.movies && props.movies.map(movie =>
                <li key={movie.id}>
                    {movie.title} - {movie.rating} - {movie.description}
                </li>
            )}
        </div>
    )
}