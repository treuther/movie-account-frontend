//class component because we need a way to store the inputed values

import React from 'react';
import {connect} from 'react-redux';


class MovieInput extends React.Component {

    render() {
        return(
            <div>
                <form>
                    <label>Enter title:</label><br />
                    <input /><br/>
                    <label>Choose rating:</label>
                    <select>
                        <option>R</option>
                        <option>PG-13</option>
                        <option>PG</option>
                    </select>
                </form>
            </div>
        )
    }
}

export default connect(null)(MovieInput);