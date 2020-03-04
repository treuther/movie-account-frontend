import React from 'react';
import ReactDOM from 'react-dom';
//set up store and connect thunk to store
import {createStore, applyMiddleware} from 'redux';
//set up thunk
import thunk from 'redux-thunk';
//wrap App with Provider so you have access to Store
import {Provider} from 'react-redux';

import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

