//Genre information and a list of movies
//functional component because not utilizing state

import React from 'react';

const Genre = (props) => {

    let genre = props.genres[props.match.params.id - 1]
    
    return (
        <li>
            {genre ? genre.name : null}
        </li>
    )
}

export default Genre;

//using a ternary operator because we don't get access to genres until the second run through