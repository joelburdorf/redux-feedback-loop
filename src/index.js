import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

//      currently not using this feedbackReducer. It's for the GET to Db

// const feedbackReducer = (state = [], action) => {
//     console.log('hello says feedbackReducer', action.payload);
//     if (action.type === 'SET_FEEDBACK') {
//         return action.payload
//     };
//     return state;
// }

const feelingReducer = (state = [], action) => {
    //console.log('hello says feelingReducer', action.payload);
    if (action.type === 'SET_FEELING') {
        return action.payload
    };
    return state;
}

const understandingReducer = (state = [], action) => {
    //console.log('hello says understandingReducer', action.payload);
    if (action.type === 'SET_UNDERSTANDING') {
        return action.payload
    };
    return state;
}
const supportReducer = (state = [], action) => {
    //console.log('hello says supportReducer', action.payload);
    if (action.type === 'SET_SUPPORT') {
        return action.payload
    };
    return state;
}
const commentReducer = (state = [], action) => {
    //console.log('hello says commentReducer', action.payload);
    if (action.type === 'SET_COMMENT') {
        return action.payload
    };
    return state;
}

const storeInstance = createStore(
    combineReducers({
        // feedbackReducer,
        feelingReducer,
        understandingReducer,
        supportReducer,
        commentReducer,
        
    }),
     applyMiddleware(logger),
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

registerServiceWorker();
