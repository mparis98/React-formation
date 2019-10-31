import React from 'react';
import './App.css';
import Chat from './components/Chat.js'
import 'bootstrap/dist/css/bootstrap.css';
import store from './components/containers/Store'

import {Provider} from "react-redux";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Login from "./components/Login";


function App() {
    return (
        <div className="App">
            <Router>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/login">Login</Link>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3"></div>
                                <div className="col-md-6">
                                    <Provider store={store}>
                                        <Route exact path="/">
                                            <Login/>
                                        </Route>
                                        <Route path="/chat">
                                            <Chat/>
                                        </Route>
                                    </Provider>
                                </div>
                                <div className="col-md-3"></div>
                            </div>
                        </div>
                    </Switch>
                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                </div>
            </Router>
        </div>
    );
}

export default App;
