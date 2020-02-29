import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const feedbackReducer = (state = [], action) => {
    console.log('hello says feedbackReducer', action.payload);
    if (action.type === 'SET_FEEDBACK') {
        return action.payload
    };
    return state;
}

const storeInstance = createStore(
    combineReducers({
        feedbackReducer,
        
    }),
     applyMiddleware(logger),
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

registerServiceWorker();
