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

// class Home extends React.Component {

//     componentDidMount() {
//         this.props.fetchGenres()
//     }

//     render() {
//         return (
//             <Container fluid className='home'>
//                 <Row>
//                     <Col><h1>Movie Emporium</h1></Col>
//                 </Row>
//                 <Row className='opening'>
//                     <Col>
//                         <p>Welcome to Movie Emporium!</p>
//                         <p>A place to record all movies you watch, according to Genre. Please feel free to add/edit/delete genres or movies.</p>
//                     </Col>
//                     <Col>
//                     <Tally genres={this.props.genres} movies={this.props.movies}/>
//                     </Col>
//                 </Row>
//             </Container>
//         )
//     }
// }

// //...routerProps give Genre access to params

// //accessing values currently in our store as props.
// const mapStateToProps = state => {
//     return {
//         genres: state.genres.genres
//     }
// }

// export default connect(mapStateToProps, {fetchGenres})(Home);