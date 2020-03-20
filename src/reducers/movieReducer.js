export default function movieReducer(state = {movies: []}, action) {
    switch (action.type) {
        case 'FETCH_MOVIES':
            return {movies: action.payload}

        case 'ADD_MOVIE':
            let movies = state.movies.map(movie => {
                if (movie.genre_id === action.payload.genre_id) {
                    return action.payload
                } else {
                    return movie.genre_id
                }
            })
            return {...state, movies: movies}

        case 'DELETE_MOVIE':
            let removeMovies = state.movies.map(movie => {
                if (movie.genre_id === action.payload) {
                    return action.payload
                } else {
                    return movie.genre_id
                }
            })
            return {...state, movies: removeMovies}

        default:
            return state
    }
}