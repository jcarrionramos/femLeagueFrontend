import React from 'react';
import { Menu, Icon, Button } from 'antd';

const styles = {
  sidebar: {
    position: "fixed",
    backgroundColor: "#001529",
    width:"20%",
    height:"100%"
  },

  title: {
    color: "#FFFFFF",
    textAlign: "center",
    paddingTop: "10px"
  }
}

const Sidebar = (props) => {
  return (
    <div className="sidebar" style={styles.sidebar}>
      <h1 style={styles.title}>Master League Soccer</h1>

      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        onClick={props.handleClick}
      >
        <Menu.Item key="1">
          <Icon type="pie-chart" />
          <span>Liga Actual</span>
        </Menu.Item>

        <Menu.Item key="2">
          <Icon type="desktop" />
          <span>Equipos</span>
        </Menu.Item>

        <Menu.Item key="3">
          <Icon type="team" />
          <span>Jugadores</span>
        </Menu.Item>

        <Menu.Item key="4">
          <Icon type="copy" />
          <span>Arbitros</span>
        </Menu.Item>

        <Menu.Item key="5">
          <Icon type="plus" />
          <span>Crear Liga</span>
        </Menu.Item>

        <Menu.Item key="6">
          <Icon type="logout" />
          <span>Salir</span>
        </Menu.Item>
      </Menu>
    </div>
  )
}


export default Sidebar;
