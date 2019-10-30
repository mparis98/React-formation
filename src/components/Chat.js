import React from 'react';
import MessageList from "./MessageList";

class Chat extends React.Component {
    render() {
        return (<div className="Chat">
            <MessageList ></MessageList>
        </div>);
    }
}


export default Chat;
