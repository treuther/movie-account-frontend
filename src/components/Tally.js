import React from 'react';
import {Container} from 'react-bootstrap';

const Tally = (props) => {
    
    return (
        <Container className="tally">
            <h2>Movie Tally</h2>
            <div>
                {props.genre ? props.genre.name : null}
            </div>
        </Container>
    )
}

export default Tally;