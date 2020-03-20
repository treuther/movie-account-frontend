export const addMovie = (movie, genreId) => {    
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/genres/${genreId}/movies`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(movie)
        })
        .then(resp => resp.json())
        .then(movie => {
            if (movie.error) {
                alert(movie.error)
            } else {
                dispatch({type: 'ADD_MOVIE', payload: movie})
            } 
        })
    }
}