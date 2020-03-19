//class component because we need a way to store the inputed values

import React from 'react';
import {connect} from 'react-redux';
import { addMovie } from '../actions/addMovie';


class MovieInput extends React.Component {

    state = {
        title: '',
        rating: 'R',
        description: ''
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.addMovie(this.state, this.props.movies && this.props.movies.genre.id)
        this.setState({
            title: '',
        rating: 'R',
        description: ''
        })
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <label>Enter title:</label><br />
                    <input type="text" name="title" value={this.state.title} onChange={this.handleOnChange}/><br/>
                    <label>Choose rating:</label>
                    <select name="rating" value={this.state.rating} onChange={this.handleOnChange}>
                        <option>R</option>
                        <option>PG-13</option>
                        <option>PG</option>
                    </select><br />
                    <label>Enter description:</label><br />
                    <input type="text" name="description" value={this.state.description} onChange={this.handleOnChange}/><br/>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default connect(null, {addMovie})(MovieInput);