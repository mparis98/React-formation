import {connect} from "react-redux";
import MessageList from "../MessageList";
import store from "./Store";

const unsubscribe = store.subscribe(() =>
    console.log(store.getState())
)

const mapStateToProps = (state) => {
    return {messages: state.messages}
}

export default connect(mapStateToProps)(MessageList);
