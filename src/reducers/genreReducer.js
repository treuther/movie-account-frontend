//reducer is automaticaly passed the previous state as its first argument

export default function genreReducer(state = {genres: []}, action) {
    switch (action.type) {
        case 'FETCH_GENRES':
            return {genres: action.payload} //this is our new state!
        default:
            return state
    }  
}
