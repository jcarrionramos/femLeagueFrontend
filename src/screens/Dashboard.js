import React, { Component } from 'react';

import Sidebar from '../components/Sidebar';
import CurrentLeague from '../components/CurrentLeague';
import Teams from '../components/Teams';
import Players from '../components/Players';
import Referees from '../components/Referees';

const styles = {
  position: "relative",
  left:"20%"
}

class Dashboard extends Component {
  state = {
    current: "1"
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
