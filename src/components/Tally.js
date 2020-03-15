import React from 'react';
import {Container} from 'react-bootstrap';

const Tally = (props) => {
    console.log(props)
    
    return (
        <Container className="tally">
            <h2>Emporium Tally</h2>
            <div>
                {props.genre ? props.genre.count : null}
                {/* {props.genre} */}
            </div>
        </Container>
    )
}

export default Tally;