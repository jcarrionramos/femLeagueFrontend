import React, { Component } from 'react';

import NewRefereeButton from '../components/NewRefereeButton';
import RefereesTable from '../components/RefereesTable';

const Referees = () => {
  return(
    <div style={{paddingTop:"25px"}} className="team-screen">
      <h1 style={{position: "fixed", marginLeft:"12px"}}> Árbitros </h1>

      <NewRefereeButton />

      <RefereesTable />

    </div>
  );
}

export default Referees;
