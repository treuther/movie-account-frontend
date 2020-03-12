import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) => {
    
    return (
        <div>
            <Link to='/genres'>Movie Genres</Link>
            <Link to='/genres/new'>Add New Genre</Link>
        </div>
    )
}

export default NavBar;