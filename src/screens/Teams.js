import React from 'react';

import NewTeamButton from '../components/NewTeamButton';
import TeamsTable from '../components/TeamsTable';

const Teams = () => {
  return(
    <div style={{paddingTop:"25px"}} className="team-screen">
      <h1 style={{position: "fixed", marginLeft:"12px"}}> Equipos </h1>

      <NewTeamButton />

      <TeamsTable />

    </div>
  );
}


export default Teams;
