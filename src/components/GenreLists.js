import React from 'react';
import {Route, Link} from 'react-router-dom';
import {Container, ListGroup, Item} from 'react-bootstrap';


//functional component because it's just listing info, not taking in info.

//this will render a list of genres
const GenreLists = (props) => {

    console.log(props)
    
    return (
        <Container>
            <h2>Movie Genres</h2>
            <ListGroup>
            <p>Click on a genre to see associated movies.</p>
            {props.genres.map(genre =>
            <ListGroup.Item key={genre.id}>
                <Link to={`/genres/${genre.id}`}>{genre.name}</Link>
            </ListGroup.Item>)}
            </ListGroup>
        </Container>
    )
}

export default GenreLists;

//with a class component, props can be passed in as this.props.
//with a functional component, props have to be passed in (or deconstructured name).