//functional component because it receives prop

import React from 'react';
import {connect} from 'react-redux';
import {deleteMovie} from '../actions/deleteMovie';
import {Container, ListGroup, Item, Button} from 'react-bootstrap';
import LikeButton from './LikeButton';


// Initially this was a functional component, which are stateless
// Changed to class component to have local state
class Movies extends React.Component {

// props VS this.props - if super(props) is present, then component is
// inheriting from parent and no need for this.props.
handleDelete = (movie) => {
    this.props.deleteMovie(movie.id, movie.genre_id)
}

handleSort = () => {
   console.log("hello")
    this.setState({
        sorted: true
    })
}

    handleChange = () => {
        this.setState(prevState => ({
            liked: !prevState.liked
        }))
    }

    static getDerivedStateFromProps(props, state) {
        let movieList = props.movies
        console.log(state)
        if (state.sorted === true) {
            movieList.sort((a, b) => {
                if (a.title < b.title) {
                    return -1;
                } 
                if (a.title > b.title) {
                    return 1;
                }
                return 0;
            })
        }
        return {movies: movieList}
    }

    render() {

        let sorted = this.state.movies

        return (
            <Container>
                <h2>Recorded Movies</h2>
                <Button className="btn" variant="dark" onClick={() => this.handleSort()}>Sort title</Button>
                <ListGroup>

                    {/* && = Came from project prep page. SEE NOTES BELOW */}
                        {this.state.movies.map(movie => 
                            <ListGroup.Item key={movie.id}><h3>{movie.title}</h3> <p>Rating: {movie.rating}</p><p>{movie.description}</p>
                            {/* <Button className="btn" variant="dark" onClick={this.handleChange}>{this.state.liked ? "Liked" : "Unliked"}</Button> */}
                            <LikeButton movieId={movie.id} />
                            <Button className="btn" variant="dark" onClick={() => this.handleDelete(movie)}>Delete</Button>
                    </ListGroup.Item>)}
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



// NOTES ON USE OF &&
// Project Handy Tools & Resources:
//https://stackoverflow.com/questions/50845894/reactjs-typeerror-cannot-read-property-map-of-undefined
// One can use the conditional rendering to render your movies.
// Therefore if movies is undefined the right operand of the and operator
// (&&) will not be rendered

//# Add like button to each listed movie
// steps
//1. add a like button
//2. add onClick to trigger
//3. handleChange will toggle
//4. assign a variable - to be called in the render