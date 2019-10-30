/*
 * action types
 */

export const ADD_MESSAGE = 'ADD_MESSAGE';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const GET_MESSAGE = 'GET_MESSAGE';
export const GET_MESSAGE_SUCCESS = 'GET_MESSAGE_SUCCESS';
export const GET_MESSAGE_ERROR = 'GET_MESSAGE_ERROR';
export const ADD_USERNAME = 'ADD_USERNAME';

/*
 * other constants
 */
export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action creators
 */

export function addMessage(text) {
    console.log({type: ADD_MESSAGE, text})
    return {type: ADD_MESSAGE, text}
}

export function addUsername(username) {
    console.log({type: ADD_USERNAME, username})
    return {type: ADD_USERNAME, username}
}

export function getMessages() {
    return dispatch => {
        dispatch({type: GET_MESSAGE});

        return fetch("https://my-json-server.typicode.com/tlenclos/formation-react-fake-server/messages")
            .then(response => response.json())
            .then(json => {
                dispatch({type: GET_MESSAGE_SUCCESS, messages: json})
            }).catch(err => dispatch({type: GET_MESSAGE_ERROR, error: err}));
    }

}
