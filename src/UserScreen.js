import React, { Component } from 'react';
import { DatePicker, Button } from 'antd';
import PositionTable from './components/PositionTable.js';
import NextMatchesTables from './components/NextMatchesTable.js';
import MaxScorersPlayers from './components/MaxScorersPlayers.js';


const UserScreen = () =>(
    <div style={{ margin: 100 }}>
      <h1>Liga de Football Femenina</h1>
      <Button>OK </ Button>

      <br /><hr /><br />

      <h1>Tabla De Posiciones</h1>
      <PositionTable />

      <br /><hr /><br />

      <h1>Próximos Partidos</h1>
      <NextMatchesTables />

      <br /><hr /><br />

      <h1>Pichichi</h1>
      <MaxScorersPlayers />
    </div>
);


export default UserScreen;
