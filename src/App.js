import React, { Component } from 'react';
import { BrowserRouter as Router ,Route, Switch } from 'react-router-dom';

import UserScreen from './UserScreen.js'
import PositionTable from './components/PositionTable.js';

const LALA = () => (
    <h1> Hola Mundo! </h1>
)

class App extends Component{
    render(){
        return(
            <div>
                <Route path="/" component={ UserScreen } />
                <Route path="/lala" component={ LALA } />
            </div>
        );
    }
}

export default App;
