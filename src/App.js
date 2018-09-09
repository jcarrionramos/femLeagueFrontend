import React, { Component } from 'react';
import { DatePicker, Button } from 'antd';
import PositionTable from './components/PositionTable.js';
import NextMatchesTables from './components/NextMatchesTable.js';
// import MaxScoresPlayers from './components/MaxScores.js';

import './index.css';

class App extends Component {
    render(){
        return (
          <div style={{ margin: 100 }}>
            <h1>Liga de Football Femenina</h1>
            <Button>OK </ Button>

            <hr /><br />

            <h1>Tabla De Posiciones</h1>
            <PositionTable />

            <hr /><br />

            <h1>Próximos Partidos</h1>
            <NextMatchesTables />

            <hr /><br />

            <h1>Pichichi</h1>
          </div>
        );
    }
}

export default App
