import {addUsername} from "../actions/action";
import {connect} from "react-redux";
import Login from '../Login'

const mapDispatchToProps = { addUsername }

export default connect(null, mapDispatchToProps)(Login);
