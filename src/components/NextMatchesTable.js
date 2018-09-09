import React, { Component } from 'react';
import { Table } from 'antd';

const columns = [{
        title: 'Fecha',
        dataIndex: 'Day',
        key: 'Day'
    },{
        title: 'Local',
        dataIndex: 'Local_name',
        key: 'Local_name',
    }, {
        title: 'Resultado',
        dataIndex: 'vs',
        key: 'vs',
        align: 'center'
    }, {
        title: 'Visita',
        dataIndex: 'Visit_name',
        key: 'Visit_name',
}];

class NextMatchesTables extends Component {
    state = {
        nextMatches: [],
    }

    componentDidMount(){
        fetch('http://localhost:9000/nextmatches',{
            method: 'GET',
            headers: {
                "content-type": "application/json",
                "Accept": "application/json",
            },
        })
        .then(response => response.json())
        .then(resp => {
            resp.data.map((current) => {
                current.vs = "vs";
            });
            this.setState({
                nextMatches: resp.data
            })
        })
    }

    render(){
        const { nextMatches } = this.state;
        console.log(nextMatches);
        return(
            <div className="nextMatches">
                <Table dataSource={nextMatches} columns={columns} />
            </div>
        );
    }
}

export default NextMatchesTables;
