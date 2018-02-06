import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { combineReducers } from 'redux';
import { applyMiddleware } from 'redux';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

//import logger from 'redux-logger';

const initialMathState = {
    result: 0
}


const initialUserState = {
    name: "No Name"
}


const mathReducer = (state = initialMathState, action) => {
    console.log(" mathReducer " + action.type);

    switch (action.type) {
        case "ADD":
            console.log(" Result "+state.result+" Payload "+action.payload)
            state = {
                ...state,
                payload:action.payload,
                result: state.result + action.payload
            }
            break;

        case "SUB":
        state = {
            ...state,
            result: state.result - action.payload
        }
        break;

        default:
            break;
    }
    return state;
};

const userReducer = (state = initialUserState, action) => {
    console.log(" userReducer " + action.type);
    switch (action.type) {
        case "SET_NAME":
            state = {
                ...state,
                oldName:state.name,
                name:  action.payload
            }
            break;
        default:
            break;
    }
    return state;

};

const myLogger = (store) => (next) => (action) => {
    console.log(" Action Logger" + action);
    next(action);
}

const store = createStore(combineReducers({ math: mathReducer, user: userReducer }), {}, applyMiddleware(myLogger));

//store.subscribe(() => console.log(" Logging State"+ store.getState().mathReducer.result));

//store.dispatch({type : "ADD"});

//store.dispatch({type : "ADD"});

//store.dispatch({type : "SET_NAME"});


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

registerServiceWorker();
