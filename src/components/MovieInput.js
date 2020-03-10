//class component because we need a way to store the inputed values

import React from 'react';
import {connect} from 'react-redux';


class MovieInput extends React.Component {

    state = {
        title: '',
        rating: '',
        description: ''
    }

    handleOnChange = () => {
        //
    }

    render() {
        return(
            <div>
                <form>
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
                </form>
            </div>
        )
    }
}

export default connect(null)(MovieInput);