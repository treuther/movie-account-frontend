import React from 'react';

const Movie = (props) => {


    let movie = props.movies.filter(movie => movie.id == props.match.params.id)[0]

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