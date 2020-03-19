export default function movieReducer(state = {movies: []}, action) {
    
    switch (action.type) {
        case 'FETCH_MOVIES':
            return {movies: action.payload}

        // case 'ADD_MOVIE':
        //     let movies = state.movies.map(movie => {
        //         if (movie.genre_id === action.payload.genre.id) {
        //             return action.payload
        //         } else {
        //             return movie.genre_id
        //         }
        //     })
        //     return {...state, movies: movies}

        default:
            return state
    }
}