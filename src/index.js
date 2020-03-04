import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux'; //set up store and connect thunk to store
// compose combines middlewares so that we can pass one argument.
import thunk from 'redux-thunk'; //set up thunk
import {Provider} from 'react-redux'; //wrap App with Provider so all components have access to Store
import genreReducer from './reducers/genreReducer';

import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//reducer = tells us what to do with the stored data

//store = globally storing data
let store = createStore(genreReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
document.getElementById('root'));

