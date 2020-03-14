import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

const Home = (props) => {

    return (

        <Container fluid>
            <Row>
                <Col className='title'><h1>Movie Emporium</h1></Col>
            </Row>
            <Row>
            <Col><p>Welcome to Movie Emporium!</p></Col>
            </Row>
        </Container>
    )
}

export default Home;