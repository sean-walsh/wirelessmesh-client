import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Table = ({ devices, host, customerLocationId}) => {
    const toggleNightlight = async (deviceId) => {
        await fetch(host + '/wirelessmesh/toggle-nightlight', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ customerLocationId: customerLocationId, deviceId: deviceId } )
        })
        console.log(customerLocationId)
    }

    return (
        <table class="table table-bordered table-striped table-hover">
            <thead class="thead-dark">
                <tr>
                    <th scope="col"></th>
                    <th scope="col">deviceId</th>
                    <th scope="col">room</th>
                    <th scope="col">nightlight on</th>
                    <th scope="col">&nbsp;</th>
                </tr>
            </thead>
            <tbody>
                { (devices.length > 0) ? devices.map( (device, index) => {
                    return (
                        <tr key={ index }>
                            <th scope="row">&nbsp;</th>
                            <td>{ device.deviceId }</td>
                            <td>{ device.room }</td>
                            {
                                device.nightlightOn
                                    ? <td>yes</td>
                                    : <td>no</td>
                            }
                            <td><button id={ device.deviceId } onClick={ () => toggleNightlight(device.deviceId) }
                            >toggle nightlight</button></td>
                        </tr>
                    )
                }) : <tr><td colSpan="5">Loading...</td></tr> }
            </tbody>
        </table>
    );
}

export default Table
