import React from 'react';

//functional component because it's just listing info, not taking in info.

//this will render a list of genres
const GenreLists = (props) => {
    return (
        <div>
            Genre Lists
        </div>
    )
}

export default GenreLists;

//with a class component, props can be passed in as this.props.
//with a functional component, props have to be passed in (or deconstructured name).