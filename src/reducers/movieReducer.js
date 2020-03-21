import { editGenre } from "../actions/editGenre"

export default function movieReducer(state = {movies: []}, action) {
    switch (action.type) {
        case 'FETCH_MOVIES':
            return {movies: action.payload}

        case 'ADD_MOVIE':
            // let movies = state.movies.map(movie => {
            //     if (movie.genre_id === action.payload.genre_id) {
            //         return action.payload
            //     } else {
            //         // return movie
            //         return movie.genre_id
            //     }
            // })
            return {...state, movies: [...state.movies, action.payload]}

            // return {...state, movies: movies}
            // return {...state, movies: [...state.movies]}
            // return {...state, movies: movies}

        case 'DELETE_MOVIE':
            let removeMovie = state.movies.map(movie => {
                if (movie === action.payload) {
                    return action.payload
                } else {
                    return movie
                }
            })
            return {...state, movies: removeMovie}

        default:
            return state
    }
}