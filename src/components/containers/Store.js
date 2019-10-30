import {createStore, applyMiddleware} from 'redux'
import todoApp from '../reducers/reducers'
import thunk from 'redux-thunk';

const customMiddleWare = store => next => action => {
    console.log("Middleware triggered:", action);
    next(action);
};

const store = createStore(todoApp, applyMiddleware(thunk, customMiddleWare));

export default store;
