import React from 'react';
import Chat from "./Chat";
import MessageItem from "./MessageItem";
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import todoApp from './reducers/reducers'
import AddMessage from './MessageBar';
import {connect} from 'react-redux';
import store from './containers/Store';
import {addMessage, getMessages} from "./actions/action";
import ReactDOM from 'react-dom';

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

const unsubscribe = store.subscribe(() =>
    console.log(store.getState())
)

const mapStateToProps = (state) => {
    return {messages: state.messages}
}

export default connect(mapStateToProps)(MessageList);
