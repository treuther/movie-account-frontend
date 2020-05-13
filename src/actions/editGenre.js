export const editGenre = (genreFormData) => {
    
    //dispatch = Redux store method. requires action with type. other properties are optional
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/genres/${genreFormData.id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'PATCH',
            body: JSON.stringify(genreFormData)
        })
        .then(resp => resp.json())
        .then(genre => dispatch({type: 'EDIT_GENRE', payload: genre}))
    }
}