import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {connect} from 'react-redux';
import store from './containers/Store';
import {addUsername} from "./actions/action";
import {
    useHistory,
} from "react-router-dom";

let Login = ({dispatch})=> {
    let history = useHistory();
    return (
        <div className="row">
            <div className="col-md-8">
                <label>Username</label>
                <input type="text" id="textUsername" name="text" className="form-control"
                />
            </div>
            <div className="col-md-4">
                <input type="submit" value="Envoyer" onClick={e => {
                    e.preventDefault()
                    dispatch(addUsername(document.getElementById('textUsername').value))
                    document.getElementById('textUsername').value = ''
                    history.push('/chat')
                }} />
            </div>
        </div>

    )
}

Login = connect()(Login)

export default Login;
