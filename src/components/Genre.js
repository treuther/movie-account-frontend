//Genre information and a list of movies
//functional component because not utilizing state

import React from 'react';
import MoviesContainer from '../containers/MoviesContainer';
import GenreEdit from './GenreEdit'
import {Container} from 'react-bootstrap';

const Genre = (props) => {

    // let genre = props.genres[props.match.params.id - 1]
    let genre = props.genres.filter(genre => genre.id == props.match.params.id)[0]
    
    return (
        <Container>
            <h3>
                {genre ? genre.name : null}
            </h3>
            <GenreEdit genre={genre}/>
            <hr/>
            <MoviesContainer genre={genre}/>
                
        </Container>
        
    )
}

export default Genre;

//using a ternary operator because we don't get access to genres until the second run through