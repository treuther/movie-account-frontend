import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux'; //set up store and connect thunk to store
// compose combines middlewares so that we can pass one argument.
import thunk from 'redux-thunk'; //set up thunk. Returns a function from the action creator. needed for async requests.
import {Provider} from 'react-redux'; //wrap App with Provider so all components have access to Store
import {BrowserRouter as Router} from 'react-router-dom';
import genreReducer from './reducers/genreReducer';
import movieReducer from './reducers/movieReducer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//reducer = tells us what to do with the stored data

const reducer = combineReducers({
    genres: genreReducer,
    movies: movieReducer
})

//store = globally storing data
let store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
    ,
document.getElementById('root'));

//Index.js is the top of the chain. 
//document.getElementById('root') - React still relies on Index.html to load JS.

