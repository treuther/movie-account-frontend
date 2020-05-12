// render other components and pass them data. Container has other functions/callback functions, etc.

import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import {fetchGenres} from '../actions/fetchGenres';
import GenreLists from '../components/GenreLists';
import GenreInput from '../components/GenreInput';
import Genre from '../components/Genre';

class GenresContainer extends React.Component {

    //Mounting phase. Invoked immediately after a component is mounted.
    componentDidMount() {
        console.log("a")
        this.props.fetchGenres() //performing fetchGenres() on this.props
        console.log("b")
    }

    //The only required method for class components
    render() {
        return (
            <div>
                <Switch> {/*this will look for the first match to the path*/}
                    <Route path='/genres/new' component={GenreInput} /> {/*routes the user to genre input form*/}
                    <Route path='/genres/:id' render={(routerProps) => <Genre {...routerProps} genres={this.props.genres}/>}/>
                    <Route exact path='/genres' render={(routerProps) => <GenreLists {...routerProps} genres={this.props.genres}/>}/>
                </Switch>
            </div>
        )
    }
}

//...routerProps give Genre access to params

//accessing values currently in our store as props.
//state = entire Redux store
const mapStateToProps = state => {
    return {
        genres: state.genres.genres
    }
}
//mapStateToProps passed as 1st argument and will be called everytime the Redux store state changes
//used for selective data from the store that the connected component needs
export default connect(mapStateToProps, {fetchGenres})(GenresContainer);
//connect = connects the React component to the Redux store