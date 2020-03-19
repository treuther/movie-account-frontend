//reducer is automaticaly passed the previous state as its first argument

export default function genreReducer(state = {genres: []}, action) {
    
    switch (action.type) {
        case 'FETCH_GENRES':
            return {genres: action.payload}
        case 'ADD_GENRE':
            return {...state, genres: [...state.genres, action.payload]} //returns an array of all previous genres, plus the new genre with action.payload.
        case 'ADD_MOVIE':
            let genres = state.genres.map(genre => {
                if (genre.id === action.payload.id) {
                    return action.payload
                } else {
                    return genre
                }
            })
        return {...state, genres: genres}
        case 'DELETE_MOVIE':
            let removeMovies = state.genres.map(genre => {
                if (genre.id === action.payload.id) {
                    return action.payload
                } else {
                    return genre
                }
            })
            return {...state, genres: removeMovies}
        case 'EDIT_GENRE':
            let editGenres = state.genres.map(genre => {
                if (genre.id === action.payload.id) {
                    return action.payload
                } else {
                    return genre
                }
            })
            return {...state, genres: editGenres}
        default:
            return state
    }  
}

// the return is the new state!