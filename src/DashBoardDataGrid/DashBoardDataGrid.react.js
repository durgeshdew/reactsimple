import React from 'react';
import DashboardHeader from '../DashboardHeader/DashboardHeader.react';
import './DashBoardDataGrid.css';

const DashBoardDataGrid = (props) => {

    return (

        props.driverList.map((item, idx) => (
            <tr key={idx}>
                <td>{item.name}</td>
                <td>{item.rating}</td>
            </tr>
        ))
    );

}

export default DashBoardDataGrid;