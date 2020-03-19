//functional component because it receives prop

import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {deleteMovie} from '../actions/deleteMovie';
import {Container, ListGroup, Item, Button} from 'react-bootstrap';

const Movies = (props) => {

    console.log(props)

//defined with const keywords because this is a functional component.
const handleDelete = (movie) => {
    props.deleteMovie(movie.id, movie.genre_id) //because this is a functional componenet, it comes in a props, not this.props
}

    return (
        <Container>
            <ListGroup>
            {props.movies && props.movies.map(movie => 
                    <ListGroup.Item key={movie.id}><h3>{movie.title}</h3> <p>Rating: {movie.rating}</p><p>{movie.description}</p> <Button className="btn" variant="dark" onClick={() => handleDelete(movie)}>Delete</Button></ListGroup.Item>
                )}
            </ListGroup>
        </Container>
    )
}

export default connect(null, {deleteMovie})(Movies);