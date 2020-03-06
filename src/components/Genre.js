//Genre information and a list of movies
//functional component because not utilizing state

import React from 'react';

const Genre = (props) => {
    
    return (
        <li>
            {props.genre.name}
        </li>
    )
}

export default Genre;