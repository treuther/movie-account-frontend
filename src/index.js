import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux'; //set up store and connect thunk to store
// compose combines middlewares so that we can pass one argument.
import thunk from 'redux-thunk'; //set up thunk. Returns a function from the action creator. needed for async requests.
import {Provider} from 'react-redux'; //wrap App with Provider so all components have access to Store
import {BrowserRouter as Router} from 'react-router-dom';
import genreReducer from './reducers/genreReducer';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//reducer = tells us what to do with the stored data

//store = globally storing data
let store = createStore(genreReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <NavBar />
            <div>
                <h1 style={{textAlign: 'center'}}>Movie Emporium</h1>
            </div>
            <App />
        </Router>
    </Provider>
    ,
document.getElementById('root'));

