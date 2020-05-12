//class component because we need a way to store the inputed values

import React from 'react';
import {connect} from 'react-redux';
import { addMovie } from '../actions/addMovie';
import {Form, Group, Control, Label, Container} from 'react-bootstrap';


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
        this.props.addMovie(this.state, this.props.genre.id)
        this.setState({
            title: '',
        rating: 'R',
        description: ''
        })
    }

    render() {
        return(
            <Container className='formContainer'>
                <h2>Enter New Movie</h2>
                <form onSubmit={this.handleOnSubmit}>
                    <Form.Group className="form">
                        <Form.Label>Enter title:</Form.Label><br />
                        <Form.Control type="text" name="title" value={this.state.title} onChange={this.handleOnChange}/><br/>
                        <Form.Label>Choose rating:</Form.Label>
                        <Form.Control as="select" name="rating" value={this.state.rating} onChange={this.handleOnChange}>
                            <option>R</option>
                            <option>PG-13</option>
                            <option>PG</option>
                        </Form.Control><br />
                        <label>Enter description:</label><br />
                        <Form.Control type="text" name="description" value={this.state.description} onChange={this.handleOnChange}/><br/>
                        <input type="submit" />
                    </Form.Group>
                </form>
            </Container>
        )
    }
}

export default connect(null, {addMovie})(MovieInput);