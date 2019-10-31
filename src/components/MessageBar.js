import React from 'react';
import { connect } from 'react-redux'
import { addMessage } from './actions/action'


let AddMessage = ({ addMessage }) => {

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
                        document.getElementById('textMessage').value = ''
                    }}/>
                </div>
            </div>
        </div>

    )
};

const mapDispatchToProps = {addMessage}

export default connect(null, mapDispatchToProps)(AddMessage);
