import React from 'react';
import ws from './containers/Websocket';

let AddMessage = ({ addMessage, messages }) => {

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
                        addMessage(document.getElementById('textMessage').value)
                        ws.send(JSON.stringify({type: 'ADD_MESSAGE',message: document.getElementById('textMessage').value, username:messages.username}))
                        document.getElementById('textMessage').value = ''
                    }}/>
                </div>
            </div>
        </div>

    )
};

export default AddMessage;
