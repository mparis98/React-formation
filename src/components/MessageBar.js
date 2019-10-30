import React from 'react';
import { connect } from 'react-redux'
import { addMessage } from './actions/action'


let AddMessage = ({ dispatch }) => {

    return (
        <div>
            <div className="row">
                <div className="col-md-8">
                    <input type="text" id="textMessage" name="text" className="form-control"
                           />
                </div>
                <div className="col-md-4">
                    <input type="submit" value="Envoyer" onClick={e => {
                        e.preventDefault()
                        dispatch(addMessage(document.getElementById('textMessage').value))
                        document.getElementById('textMessage').value = ''
                    }}/>
                </div>
            </div>
        </div>

    )
};

AddMessage = connect()(AddMessage)

export default AddMessage;
