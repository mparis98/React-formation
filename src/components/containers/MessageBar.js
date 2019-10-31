import {addMessage} from "../actions/action";
import {connect} from "react-redux";
import AddMessage from "../MessageBar";

const mapDispatchToProps = {addMessage}

const mapStateToProps = (state) => {
    return {messages: state.messages}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddMessage);
