import React, { Component } from 'react';
import { Table, Popconfirm, Divider, Button, Icon } from  'antd';

class OptionButtons extends Component {
  handleDelete = (rut) => {
    fetch('http://localhost:9000/deleteplayer?name='+rut,{
        method: 'GET',
        headers: {
            "content-type": "application/json",
            "Accept": "application/json",
        },
    })
    .then(response => response.json())
    .then(resp => {
      if(resp.status === 200){
        alert("Jugador eliminado")
      }else{
        alert("Ups! algo ocurrió")
      }
    })
  }

  render() {
    const { player } = this.props;
    const caption = "Seguro que quieres eliminar a este jugador?"
    return(
      <div>
        <Button type="primary" shape="circle" size="small" icon="info-circle"/>
        <Divider type="vertical" />
        <Popconfirm title={ caption } onConfirm={() => this.handleDelete(player.rut)}>
          <a style={{color: "red"}} href="javascript:;">Eliminar</a>
        </Popconfirm>
      </div>
    );
  }
}

const columns = [{
    title: "Dorsal",
    dataIndex: "dorsal_number",
    key: "dorsal_number"
  },{
    title: "Nombre",
    dataIndex: "name",
    key: "name"
  },{
    title: "Equipo",
    dataIndex: "team_name"
  },{
    title: "Acción",
    key: "action",
    render: (text, record) => (<OptionButtons player={record} />)
}];

class PlayersTable extends Component {
  state = {
    playersData: []
  }

  render(){
    const playersData = [{
      team_name: "lala",
      dorsal_number: 5,
      name: "pedrito", //firt_name + last_name
      email: "lal@udp.cl",
      rut: 24500,
      phone: 99999
    },{
      teamName:"lolo"
    }]

    return(
      <Table
        style={{marginTop:"40px", position:"relative", maxWidth:"80%"}}
        columns={columns}
        dataSource={playersData}
      />
    );
  }
}

export default PlayersTable;
