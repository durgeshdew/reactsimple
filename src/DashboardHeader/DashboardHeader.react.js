import React from 'react';

import './DashboardHeader.css';

const DashboardHeader = (props) => {

    return (
        <div className='row'>
            <div className="col-md-2">
                <img src={props.data.logo} alt={props.data.altText} />
            </div>
            <div className="col-md-6">
                <h2>{props.data.subhead}</h2>
            </div>
            <div className='col-md-4'>
                <div> Driver Name: {props.data.driverName}</div>
            </div>
        </div>
    );

}

export default DashboardHeader;