//Genre information and a list of movies
//functional component because not utilizing state

import React from 'react';
import {Redirect} from 'react-router-dom';
import MoviesContainer from '../containers/MoviesContainer';
import GenreEdit from './GenreEdit'

const Genre = (props) => {

    // let genre = props.genres[props.match.params.id - 1]
    let genre = props.genres.filter(genre => genre.id == props.match.params.id)[0]
    
    return (
        <div>
            <h3>
                {genre ? genre.name : null}
            </h3>
                <MoviesContainer genre={genre}/>
                <GenreEdit genre={genre}/>
        </div>
        
    )
}

export default Genre;

//using a ternary operator because we don't get access to genres until the second run through