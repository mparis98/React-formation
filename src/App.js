import React from 'react';
import './App.css';
import Chat from './components/Chat.js'
import 'bootstrap/dist/css/bootstrap.css';
import store from './components/containers/Store'
import ReduxThunk from 'redux-thunk';

import {Provider} from "react-redux";


function App() {
    return (
        <Provider store={store}>
        <div className="App">
            <div className="container">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <Chat>
                    </Chat>
                </div>
                <div className="col-md-3"></div>
            </div>
            </div>
        </div>
        </Provider>
    );
}

export default App;
