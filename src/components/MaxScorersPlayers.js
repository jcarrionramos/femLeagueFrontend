import React, { Component } from 'react';
import { Table } from 'antd';

const columns = [{
        title: 'Dorsal',
        dataIndex: 'dorsal_number',
        key: 'dorsal_number',
        align: 'center'
    }, {
        title: 'Nombre',
        dataIndex: 'name',
        key: 'name'
    }, {
        title: 'Equipo',
        dataIndex: 'team_name',
        key: 'team_name',
    }, {
        title: 'Goles',
        dataIndex: 'score',
        key: 'score',
        align: 'center'
}];

class MaxScorersPlayers extends Component {
    state = {
        maxScorersPlayers: [],
    }

    componentDidMount(){
        fetch('http://localhost:9000/maxgoalscorers',{
            method: 'GET',
            headers: {
                "content-type": "application/json",
                "Accept": "application/json",
            },
        })
        .then(response => response.json())
        .then(resp => {
            resp.data.map(current => {
                current.name = current.first_name + " " + current.last_name;
            });
            this.setState({
                maxScorersPlayers: resp.data
            });
        })
    }

    render(){
        const { maxScorersPlayers } = this.state;
        return(
            <div className="maxScorersPlayers">
                <Table
                    pagination={false}
                    dataSource={maxScorersPlayers}
                    columns={columns} />
            </div>
        );
    }
}

export default MaxScorersPlayers;
