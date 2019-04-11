import React from 'react';

import './DriverDashBoard.css';
import DashboardHeader from '../DashboardHeader/DashboardHeader.react';
import DashBoardDataGrid from '../DashBoardDataGrid/DashBoardDataGrid.react';
import DashboardLinks from '../DashboardLinks/DashboardLinks.react';

class DriverDashBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
            decCount: 0,
            driverList: [{}]
        }
    }
    componentDidMount() {
        const url = "http://localhost:4040/drivers";
        fetch(url).then(res => res.json()).then(data => this.setState({ "driverList": data }));
    }
    driverData = {
        driverName: 'Ramesh',
        altText: 'Driver',
        logo: '/cabLogo.jpg',
        subhead: 'Driver Details'

    }
    increment = () => {
        this.setState({ 'count': this.state.count + 1 })
    }
    decrement = () => {
        this.setState({ 'decCount': this.state.decCount + 1 })
    }
    render() {
        return (
            <div className='driverdashboard_wrapper'>
                <DashboardHeader data={this.driverData} />
                <DashboardLinks />
                <table className='table table-striped'>
                    <tbody>
                        <tr>
                            <td><h4>Name</h4></td>
                            <td><h4>Rating</h4></td>
                        </tr>

                        <DashBoardDataGrid driverList={this.state.driverList} />
                    </tbody>
                </table>
                <div className=''>
                    <i className='fa fa-thumbs-up' onClick={this.increment}></i>
                    <span>{this.state.count} like</span> | <i className='fa fa-thumbs-down' onClick={this.decrement}></i><span>{this.state.decCount} dislike</span>
                </div>
                <ul>

                </ul>

            </div>
        );
    }
}

export default DriverDashBoard;