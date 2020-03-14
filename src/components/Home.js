import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Tally from './Tally';

const Home = (props) => {

    return (

        <Container fluid className='home'>
            <Row>
                <Col><h1>Movie Emporium</h1></Col>
            </Row>
            <Row className='opening'>
            <Col>
                <p>Welcome to Movie Emporium!</p>
                <p>A place to record all movies you watch, according to Genre. Please feel free to add/edit/delete genres or movies.</p>
            </Col>
            <Col>
                <Tally />
            </Col>
            </Row>
        </Container>
    )
}

export default Home;