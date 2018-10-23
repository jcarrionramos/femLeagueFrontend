import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import UserScreen from './screens/UserScreen.js';
import Dashboard from './screens/Dashboard.js';

class App extends Component{
    render(){
        return(
            <div>
                <Dashboard/>
            </div>
        );
    }
}

export default App;
