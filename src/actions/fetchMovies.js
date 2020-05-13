export function fetchMovies() {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/movies')
        .then(resp => resp.json())
        .then(movies => dispatch({ //dispatch passes type and payload over to the reducer to update state.
            type: 'FETCH_MOVIES',
            payload: movies
    }))
    }
}

// ACTIONS
