import React from 'react';
import MessageList from "./MessageList";
import MessageBar from "./MessageBar";

class Chat extends React.Component {
    render() {
        return (<div className="Chat">
            <MessageList ></MessageList>
        </div>);
    }
}


export default Chat;
