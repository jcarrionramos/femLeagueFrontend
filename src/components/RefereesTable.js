import React, { Component } from 'react';
import { Table, Popconfirm, Divider, Button, Icon } from  'antd';

class OptionButtons extends Component {
  handleDelete = (rut) => {
    console.log(rut);
  }

  render() {
    const { player } = this.props;
    const caption = "Seguro que quieres eliminar a este jugador?"
    return(
      <div>
        <Button type="primary" shape="circle" size="small" icon="info-circle"/>
        <Divider type="vertical" />
        <Popconfirm title={caption} onConfirm={() => this.handleDelete(player.rut)}>
          <a style={{color: "red"}} href="javascript:;">Eliminar</a>
        </Popconfirm>
      </div>
    );
  }
}

const columns = [{
    title: "Nombre",
    dataIndex: "name",
    key: "name"
  },{
    title: "Email",
    dataIndex: "email",
    key: "email"
  },{
    title: "Acción",
    key: "action",
    render: (text, record) => (<OptionButtons player={record} />)
}];

class RefereesTable extends Component {
  state = {
    refereesData: []
  }

  render(){
    const refereesData = [{
      name: "pedrito", //firt_name + last_name
      email: "lal@udp.cl",
      rut: 24500,
      phone: 99999
    },{
      team_name:"lolo"
    }]

    return(
      <Table
        style={{marginTop:"40px", position:"relative", maxWidth:"80%"}}
        columns={columns}
        dataSource={refereesData}
      />
    );
  }
}

export default RefereesTable;
