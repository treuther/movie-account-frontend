import React from 'react';

// in order to have a controlled form, you gotta have class...

class GenreInput extends React.Component {

    state = {
        name: ''
    }

    // abstracting the name KEY from input. Useful when there is more than one value to pass in. Brackets because it's reading the entered value and sets it as key. The rules of JS object assinging.
    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <form>
                    <label>Enter Genre Name:</label><br/>
                    <input type="text" placeholder="Name" value={this.state.name} name="name" onChange={this.handleOnChange}/> <br/>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default GenreInput;