//the action creater creates an action object, the action object gets dispatched to the reducer
//using regular function syntax. arrow function could work too!

export function fetchGenres() {
    console.log("c")
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/genres')
        .then(resp => resp.json())
        .then(genres => {
            console.log("d")
            dispatch({ //dispatch passes type and payload over to the reducer to update state.
                type: 'FETCH_GENRES',
                payload: genres
            })
        })
    }
    console.log("e")
}

