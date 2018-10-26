import React, { Component } from 'react';
import { Table, Popconfirm } from  'antd';

class DeleteTeamButton extends Component {
  handleDelete = (teamName) => {
    console.log(teamName);
  }

  render() {
    const { teamName } = this.props;
    const caption = "Seguro que quieres eliminar el equipo?"

    return(
      <Popconfirm title={caption} onConfirm={() => this.handleDelete(teamName)}>
        <a style={{color: "red"}} href="javascript:;">Eliminar</a>
      </Popconfirm>
    );
  }
}

class TeamsTable extends Component {
  state = {
    columns: [],
    teamsData: []
  }

  render(){
    const columns = [{
        title: "Nombre",
        dataIndex: "teamName",
        key: "teamName"
      },{
        title: "Acción",
        key: "action",
        render: (text, record) => (<DeleteTeamButton teamName={record.teamName} />)
    }];

    const teamsData = [{
      teamName: "lala"
    },{
      teamName:"lolo"
    }]

    return(
      <Table style={{marginTop:"40px"}} columns={columns} dataSource={teamsData} />
    );
  }
}

export default TeamsTable;
