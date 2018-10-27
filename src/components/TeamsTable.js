import React, { Component } from 'react';
import { Table, Popconfirm } from  'antd';

class DeleteTeamButton extends Component {
  handleDelete = (teamName) => {
    fetch('http://localhost:9000/deleteteam?name='+teamName,{
        method: 'GET',
        headers: {
            "content-type": "application/json",
            "Accept": "application/json",
        },
    })
    .then(response => response.json())
    .then(resp => {
      if(resp.status === 200){
        alert("Equipo eliminado")
      }else{
        alert("Ups! algo ocurrió")
      }
    })
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

const columns = [{
    title: "Nombre",
    dataIndex: "name",
    key: "name"
  },{
    title: "Acción",
    key: "action",
    render: (text, record) => (<DeleteTeamButton teamName={record.name} />)
}];

class TeamsTable extends Component {
  state = {
    teamsData: []
  }

  componentDidMount() {
    fetch('http://localhost:9000/positions',{
        method: 'GET',
        headers: {
            "content-type": "application/json",
            "Accept": "application/json",
        },
    })
    .then(response => response.json())
    .then(resp => {
        this.setState({
            teamsData: resp.data
        });
    })
  }

  render(){
    const { teamsData } = this.state
    return(
      <Table style={{marginTop:"40px"}} columns={columns} dataSource={teamsData} />
    );
  }
}

export default TeamsTable;
