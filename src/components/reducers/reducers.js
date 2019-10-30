import {
    ADD_MESSAGE, GET_MESSAGE, GET_MESSAGE_ERROR, GET_MESSAGE_SUCCESS

} from '../actions/action'
import {combineReducers} from "redux";

const INITIAL_STATE = {messages: [], loading:false, error: null};

const messages = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case'ADD_MESSAGE':
            return {messages:[...state.messages, {username: '@username', message:action.text, sentAt:new Date()}],loading:false, error:false}
        case 'GET_MESSAGE':
            return {...state, loading:true}
        case 'GET_MESSAGE_SUCCESS':
            return {...state, messages: action.messages, loading:false}
        case 'GET_MESSAGE_ERROR':
            return {...state, loading:false, error:action.error}
        default:
            return state
    }
}

const reducers = combineReducers({
    messages,
})

export default reducers
