import React from 'react';
import Emoji from 'react-emoji-render';

class MessageItem extends React.Component {
    constructor(props){
        super(props);
        // this.state = {date: new Date()}
    }

    // componentDidMount() {
    //     this.timer = setInterval(
    //         () => this.tick(),
    //         1000
    //     );
    // }

    tick(){
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (<li className="li">
            <small>{this.props.username} - {this.props.date}</small>
            <div>
            <Emoji text={this.props.text} />
            </div>
        </li>);
    }
}

export default MessageItem;
