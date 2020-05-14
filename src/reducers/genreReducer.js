//REDUCER - takes in current state, the action to be processed and returns the
//state as it should be, based on that action occuring.
//reducers return the new state, they DO NOT modify
//CANNOT use mutating methods ie splice push pop
// can use map, filter, spread
//reducer is automaticaly passed the previous state as its first argument

export default function genreReducer(state = {genres: []}, action) {
    
    // Performs different actions based on different conditions
    switch (action.type) {
        case 'FETCH_GENRES':
            return {genres: action.payload}

        // Spread Operator - easier way of copying an array.
        case 'ADD_GENRE':
            return {...state, genres: [...state.genres, action.payload]} //returns an array of all previous genres, plus the new genre with action.payload.
        
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