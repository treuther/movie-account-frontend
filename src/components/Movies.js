//functional component because it receives prop

import React from 'react';
import {connect} from 'react-redux';
import {deleteMovie} from '../actions/deleteMovie';
import {Container, ListGroup, Item, Button} from 'react-bootstrap';

class Movies extends React.Component {

// const Movies = (props) => {

    // console.log(props)

state = {
    movies: []
}

//defined with const keywords because this is a functional component.
handleDelete = (movie) => {
    this.props.deleteMovie(movie.id, movie.genre_id) //because this is a functional componenet, it comes in a props, not this.props
}

handleSort = () => {
   console.log("hello")
    let sortedList = [...this.props.movies].sort((a, b) => {
        if (a.title < b.title) {
            return -1;
        } 
        if (a.title > b.title) {
            return 1;
        }
        return 0;
    })
    this.setState({
        movies: sortedList
    })
}

    render() {

        let sorted = this.state.movies

        return (
            <Container>
                <h2>Recorded Movies</h2>
                <Button className="btn" variant="dark" onClick={() => this.handleSort()}>Sort title</Button>
                <ListGroup>

                    {sorted.length > 0
                        ? this.state.movies && this.state.movies.map(movie => 
                            <ListGroup.Item key={movie.id}><h3>{movie.title}</h3> <p>Rating: {movie.rating}</p><p>{movie.description}</p>
                            <Button className="btn" variant="dark" onClick={() => this.handleDelete(movie)}>Delete</Button>
                            </ListGroup.Item>
                        )
                        : this.props.movies && this.props.movies.map(movie => 
                            <ListGroup.Item key={movie.id}><h3>{movie.title}</h3> <p>Rating: {movie.rating}</p><p>{movie.description}</p>
                            <Button className="btn" variant="dark" onClick={() => this.handleDelete(movie)}>Delete</Button>
                            </ListGroup.Item>
                        )
                    }

                    {/* {this.props.movies && this.props.movies.map(movie => 
                        <ListGroup.Item key={movie.id}><h3>{movie.title}</h3> <p>Rating: {movie.rating}</p><p>{movie.description}</p>
                        <Button className="btn" variant="dark" onClick={() => this.handleDelete(movie)}>Delete</Button>
                        </ListGroup.Item>
                    )} */}

                </ListGroup>
            </Container>
        )
    }
}

export default connect(null, {deleteMovie})(Movies);


//# sort movies alphabetically by title
// 1a. Change to class component
// 1. Create a button
// 2. Create a function to run for button click
// 3. Access the array of movies (props.movies)
// 4. Call sort() on array of movies (props.movies.sort())
// 5. Display sorted array (state)

// Conditional Rendering Steps
