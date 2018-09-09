import React, { Component } from 'react';
import { DatePicker, Button } from 'antd';

import './PositionTable.css'

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
            this.setState({
                teams: resp.data
            })
        })
    }

    render(){
        const { teams } = this.state
        return (
                <table>
                    <thead>
                    <tr>
                        <th><h5>Posición</h5></th>
                        <th><h5>Nombre</h5></th>
                        <th><h5>Victorias</h5></th>
                        <th><h5>Empates</h5></th>
                        <th><h5>Derrotas</h5></th>
                        <th><h5>Total</h5></th>
                    </tr>
                    </thead>

                    {
                        <tbody>
                            { teams.map((team, index) => {
                                return(
                                    <tr key={index.toString()}>
                                        <td><h6>{ index + 1 }</h6></td>
                                        <td><h6>{ team.name }</h6></td>
                                        <td><h6>{ team.win }</h6></td>
                                        <td><h6>{ team.draw }</h6></td>
                                        <td><h6>{ team.loss }</h6></td>
                                        <td><h6>{ team.total }</h6></td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    }
                </table>
        );
    }
}

export default PositionTable
