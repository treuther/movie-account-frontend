export const deleteMovie = (movieId, genreId) => {

    return (dispatch) => {
        
        return fetch(`http://localhost:3000/api/v1/genres/${genreId}/movies/${movieId}`, {
            method: 'DELETE'
        })
        .then(resp => resp.json())
        .then(resp => fetch('http://localhost:3000/api/v1/movies'))
        .then(resp => resp.json()) //parsing json to access data within
        .then(movies => dispatch({ type: 'FETCH_MOVIES', payload: movies}))  
    }
}