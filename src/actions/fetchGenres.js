//the action creater creates an action object, the action object gets dispatched to the reducer

export function fetchGenres(action) {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/genres/1')
    .then(response => response.json())
    .then(genres => dispatch({ //dispatch passes type and payload over to the reducer to update state.
        type: 'FETCH_GENRES',
        payload: genres
    }))
    }
}