import React from 'react';
import MessageList from "./MessageList";
import MessageListContainer from './containers/MessageList'
import ws from './containers/Websocket';

class Chat extends React.Component {

    render() {
        return (<div className="Chat">
            <MessageListContainer ></MessageListContainer>
        </div>);
    }
}


export default Chat;
