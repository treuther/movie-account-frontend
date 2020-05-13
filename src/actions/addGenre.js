//using arrow function syntax. regular function could work too!
//dispatch needed to send form info to reducer. thunk makes this possible!
//thunk is a middleware that lets you call action creators that return a
//function instead of an action object. That function receives the store's
//dispatch method, which is then used to dispatch regular synchronous actions
//inside the body of the function once the asynchronous operations have
//completed.

//passing in dispatch function passes in the new data.
//fetch POST request to send the new data to the DB.
export const addGenre = (genreFormData) => {
    
    //dipatch = Redux store method. Dispatches an ACTION. Only way to trigger
    // a state change.
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