// render other components and pass them data. Container has other functions/callback functions, etc.

import React from 'react';
import {connect} from 'react-redux';
import {fetchGenres} from '../actions/fetchGenres';
import GenreLists from '../components/GenreLists';
import GenreInput from '../components/GenreInput';

class GenresContainer extends React.Component {

    componentDidMount() {
        this.props.fetchGenres()
    }

    render() {
        return (
            <div>
                <GenreInput />
                Genre Input Section
                <GenreLists genres={this.props.genres} />
            </div>
        )
    }
}

//accessing values currently in our store as props.
const mapStateToProps = state => {
    return {
        genres: state.genres
    }
}

export default connect(mapStateToProps, {fetchGenres})(GenresContainer);