//the action creater creates an action object, the action object gets dispatched to the reducer
//using regular function syntax. arrow function could work too!

export function fetchGenres() {
    console.log("c")
    //dipatch = Redux store method. Dispatches an ACTION. Only way to trigger
    // a state change.
    return (dispatch) => {
        // making the network request
        fetch('http://localhost:3000/api/v1/genres') //fetching the JSON file
        .then(resp => resp.json()) //returning a promise containing the response object & assigning the json method to extract the json body content
        .then(genres => { //chaining the promise to resolve by logging to the console.
            console.log("d")
            dispatch({ //dispatch passes type and payload over to the reducer to update state.
                type: 'FETCH_GENRES', //ACTION
                payload: genres //PAYLOAD
            })
        })
    }
    console.log("e")
}

// PROMISE
// Fulfilled | Rejected | Pending | Settled