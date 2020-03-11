import React from 'react';
import {connect} from 'react-redux';
import {editGenre} from '../actions/editGenre';

// in order to have a controlled form, you gotta have class...

class GenreEdit extends React.Component {

    state = {
        name: ''
    }

    // abstracting the name KEY from input. Useful when there is more than one value to pass in. Brackets because it's reading the entered value and sets it as key. The rules of JS object assinging.
    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    //goal: save to database and update Redux store.
    handleOnSubmit = (event) => {
        event.preventDefault();
        let genre = {...this.state, id: this.props.genre.id}
        this.props.editGenre(genre)
        this.setState({
            name: '',
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <label>Edit Genre Name:</label><br/>
                    <input type="text" placeholder="Name" value={this.state.name} name="name" onChange={this.handleOnChange}/> <br/>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}


export default connect(null, {editGenre})(GenreEdit);