import React, { Component } from 'react';
import { BrowserRouter as Router ,Route, Switch } from 'react-router-dom';

import UserScreen from './UserScreen.js'
import PositionTable from './components/PositionTable.js';

class App extends Component{
    render(){
        return(
            <Router>
                <div>
                    <Route path="/" component={ UserScreen } />
                    <Route path="lala" component={ PositionTable } />
                </div>
            </Router>
        );
    }
}

export default App;
