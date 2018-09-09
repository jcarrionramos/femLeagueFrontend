import React, { Component } from 'react';
import { Table } from 'antd';

const columns = [{
        title: 'Posición',
        dataIndex: 'position',
        key: 'position',
        align: 'center'
    }, {
        title: 'Equipo',
        dataIndex: 'name',
        key: 'name'
    }, {
        title: 'Victorias',
        dataIndex: 'win',
        key: 'wins',
        align: 'center'
    }, {
        title: 'Empates',
        dataIndex: 'draw',
        key: 'draws',
        align: 'center'
    }, {
        title: 'Derrotas',
        dataIndex: 'loss',
        key: 'losses',
        align: 'center'
    }, {
        title: 'Total',
        dataIndex: 'total',
        key: 'total',
        align: 'center'
    }
];

class PositionTable extends Component {
    state = {
        teams: [],
    }

    componentWillMount(){
        fetch('http://localhost:9000/positions',{
            method: 'GET',
            headers: {
                "content-type": "application/json",
                "Accept": "application/json",
            },
        })
        .then(response => response.json())
        .then(resp => {
            resp.data.map((current, index) => {
                current.position = index + 1;
            });
            this.setState({
                teams: resp.data
            });
        })
    }

    render(){
        const { teams } = this.state
        console.log(teams)
        return (
            <div className="PositionTable">
                <Table
                    pagination={false}
                    dataSource={teams}
                    columns={columns} />
            </div>
        );
    }
}

export default PositionTable
