//using arrow function syntax. regular function could work too!
//dispatch needed to send form info to reducer. thunk makes this possible!

//passing in dispatch function passes in the new data.
//fetch POST request to send the new data to the DB.
export const addGenre = (genreFormData) => {
    
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/genres', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(genreFormData)
        })
        .then(resp => resp.json())
        .then(genre => dispatch({type: 'ADD_GENRE', payload: genre}))
    }
}