//Genre information and a list of movies
//functional component because not utilizing state

import React from 'react';
import {Redirect} from 'react-router-dom';
import MoviesContainer from '../containers/MoviesContainer';

const Genre = (props) => {

    let genre = props.genres[props.match.params.id - 1]
    
    return (
        <div>
            <h2>
                {genre ? genre.name : null}
            </h2>
                <MoviesContainer genre={genre}/>
        </div>
        
    )
}

export default Genre;

//using a ternary operator because we don't get access to genres until the second run through