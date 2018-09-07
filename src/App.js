import React, { Component } from 'react';
import { DatePicker, Button } from 'antd';

import './index.css';

class App extends Component {
    state = {
        data: []
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
            console.log(resp);
            this.setState({
                data: resp.data
            })
        })
    }

    render(){
        return (
          <div style={{ margin: 100 }}>
            <h1>AntDesign Demo</h1>
            <hr /><br />
            <DatePicker />
            <Button >OK </ Button>
          </div>
        );
    }
}

export default App
