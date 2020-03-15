//functional component because it receives prop

import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {deleteMovie} from '../actions/deleteMovie'

const Movies = (props) => {

    console.log(props)

//defined with const keywords because this is a functional component.
const handleDelete = (movie) => {
    props.deleteMovie(movie.id, movie.genre_id) //because this is a functional componenet, it comes in a props, not this.props
}

    return (
        <div>
            {props.movies && props.movies.map(movie => 
                    <li key={movie.id}>{movie.title} - {movie.rating} - {movie.description} <button onClick={() => handleDelete(movie)}>Delete</button></li>
                )}
        </div>
        // <div>
        // {props.movies && props.movies.map(movie =>
            // <li key={movie.id}>
            //     <Link to={`/movies/${movie.id}`}>{movie.title}</Link> <button onClick={() => handleDelete(movie)}>Delete</button>
            // </li>
    //             <li key={movie.id}>{movie.title} - {movie.rating} - {movie.description} <button onClick={() => handleDelete(movie)}>Delete</button></li>
    //         )}
    // </div>
    )
}

export default connect(null, {deleteMovie})(Movies);