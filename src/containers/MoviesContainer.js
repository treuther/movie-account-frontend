//class component because containr will handle state.

import React from 'react';
import {connect} from 'react-redux';
import {fetchGenres} from '../actions/fetchGenres';
import MovieInput from '../components/MovieInput';
import Movies from '../components/Movies';

class MoviesContainer extends React.Component {

    componentDidMount() {
        this.props.fetchGenres()
    }
    
    render() {
        return(
            <div>
                {/* <MovieInput movie={this.props.movie} /> */}
                {/* <Movies movies={this.props.genres && this.props.genres} /> */}
                {/* <MovieInput genre={this.props.genre}/>*/}
                {/* <Movies movies={this.props.genre && this.props.genre.movies}/> */}
                {/* <Movies genres={this.props.genres.movies.map(movie => movie.title).flat()}/> */}
                <Movies genres={this.props.genres.movies.map(movie => movie.title).flat()}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        genres: state.genres
    }
}

export default connect(mapStateToProps, {fetchGenres})(MoviesContainer);
// export default MoviesContainer;