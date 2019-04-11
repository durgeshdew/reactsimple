import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DriverDashBoard from '../DriverDashBoard/DriverDashBoard.react';
import AdminDashboard from '../AdminDashboard/AdminDashboard.react';


const AppMain = () => {

    return (
        <div >
            <Switch>
                <Route exact path='/' render={() => <h2>Home Page</h2>}></Route>
                <Route path="/driver" component={DriverDashBoard}></Route>
                <Route path="/admin" component={AdminDashboard}></Route>
            </Switch>
        </div>
    );

}

export default AppMain;