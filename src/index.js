import React from 'react';
import ReactDOM from 'react-dom'; //returns a reference to the root ReactComponent instance
import {createStore, combineReducers, applyMiddleware, compose} from 'redux'; //set up store and connect thunk to store
// compose - programming utility that combines middlewares so we can pass more than one argument.
import thunk from 'redux-thunk'; //set up thunk. Returns a function from the action creator. needed for async requests.
import {Provider} from 'react-redux'; //wrap App with Provider so all components have access to Store
import {BrowserRouter as Router} from 'react-router-dom'; //React method for routing path to specified component/path/function
import genreReducer from './reducers/genreReducer';
import movieReducer from './reducers/movieReducer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//reducer = tells us what to do with the stored data. assigns key/value pair
//combineReducer = creates a single root reducer out of many
const reducer = combineReducers({
    genres: genreReducer,
    movies: movieReducer
})

//store = globally storing data
//createStore = holds the complete state tree of the app
//reducer = a reducing function that returns the next state tree
//[preloadedState] = optional, ie restore a previously serialized user session
//enhancers = optional to pass in middlewares to enhance the store
//thunk - allows us to write action creaters that return a function to perform asynchronous/conditional dispatch
let store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

// ReactDOM.render = returns a reference to the root ReactComponent instance
ReactDOM.render(
    // Provider = makes the redux store available to any nested components that have been wrapped in this function
    <Provider store={store}>
    {/* Router = routs paths to specified component/path/function */}
        <Router>
            <App />
        </Router>
    </Provider>
    ,
document.getElementById('root'));

//ReactDOM.render(What I want to render, Where I want render it)

//Index.js is the top of the chain. 
//document.getElementById('root') - React still relies on Index.html to load JS.

