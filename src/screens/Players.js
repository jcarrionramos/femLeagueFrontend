import React, { Component } from 'react';

import NewPlayerButton from '../components/NewPlayerButton';
import PlayersTable from '../components/PlayersTable';

const Players = () => {
  return(
    <div style={{paddingTop:"25px"}} className="team-screen">
      <h1 style={{position: "fixed", marginLeft:"12px"}}> Jugadores </h1>

      <NewPlayerButton />

      <PlayersTable />

    </div>
  );
}

export default Players;
