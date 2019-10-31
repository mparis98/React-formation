import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {
    useHistory,
} from "react-router-dom";


let Login = ({addUsername}) => {
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
                    addUsername(document.getElementById('textUsername').value)
                    document.getElementById('textUsername').value = ''
                    history.push('/chat')
                }} />
            </div>
        </div>

    )
}



export default Login;
