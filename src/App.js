import React, { Component } from 'react';
import Table from './components/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './assets/lightbend-icon.svg';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            host: 'https://wandering-grass-3249.us-east1.apps.lbcs.io',
            accessToken: 'todo',
            customerLocationId: "walshs6000",
            devices: []
        }
    }

    componentDidMount() {
        fetch(this.state.host + '/wirelessmesh/get-devices?customerLocationId=walshs6000')
            .then(res => res.json())
            .then(json => json.device)
            .then(devices => {
                this.setState({ 'devices': devices })
            })
    }

    render() {
        return (
            <div className="App">
                <nav className="navbar navbar-light bg-light">
                    <a className="navbar-brand" href="./">
                        <img src={logo} alt="logo" width="80"/> My Devices
                    </a>
                </nav>
                <Table devices={ this.state.devices} host={ this.state.host } customerLocationId={ this.state.customerLocationId } />
            </div>
        )
    }
}

export default App
