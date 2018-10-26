import React, { Component } from 'react';

import CurrentLeague from './CurrentLeague';
import Teams from './Teams';
import Players from './Players';
import Referees from './Referees';
import Sidebar from '../components/Sidebar';

const styles = {
  position: "relative",
  left:"20%"
}

class Dashboard extends Component {
  state = {
    current: "2"
  }

  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  }

  render() {
    const { current } = this.state
    return (
      <div>
        <Sidebar handleClick={this.handleClick}/>

        <div style={styles}>
          {current === "1" && <CurrentLeague />}
          {current === "2" && <Teams />}
          {current === "3" && <Players />}
          {current === "4" && <Referees />}
          {current === "5" && <Teams />}
        </div>
      </div>
    );
  }
}

export default Dashboard;
