import React from 'react';
import MessageItem from "./MessageItem";
import AddMessage from './containers/MessageBar';
import {connect} from 'react-redux';
import store from './containers/Store';
import {getMessages} from "./actions/action";

class MessageList extends React.Component{
    componentDidMount() {
        this.props.dispatch(getMessages());
    }
    render() {
        return (
            <div className='marginTop'>
                {this.props.messages.messages.map((item, i) => (
                    <MessageItem username={item.username} text={item.message} date={new Date(item.sentAt).toLocaleTimeString()}/>
                ))
                }

                <AddMessage></AddMessage>
            </div>
        );
    }
}

export default MessageList;
