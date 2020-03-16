//class component because containr will handle state.

import React from 'react';
import {connect} from 'react-redux';
// import {fetchMovies} from '../actions/fetchMovies';
import MovieInput from '../components/MovieInput';
import Movies from '../components/Movies';

class MoviesContainer extends React.Component {

    // componentDidMount() {
    //     this.props.fetchMovies()
    // }
    
    render() {
        return(
            <div>
                {/* <MovieInput movie={this.props.movie} /> */}
                {/* <Movies movies={this.props.genres && this.props.genres} /> */}
                {/* <MovieInput genre={this.props.genre}/>*/}
                {/* <Movies movies={this.props.genre && this.props.genre.movies}/> */}
                <Movies movies={this.props.movies}/>
            </div>
        )
    }
}

// const mapStateToProps = state => {
//     return {
//         movies: state.movies
//     }
// }

// export default connect(mapStateToProps, {fetchMovies})(MoviesContainer);
export default MoviesContainer;