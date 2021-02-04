import React from 'react'
import './style.scss'
import { Switch, Route } from 'react-router-dom'

import Layout from '../../../../components/Admin/Layout/Index'
import Dashboard from '../Dashboard/Index'
import DoctorIndex from '../Doctor/Index'
import DoctorShow from '../Doctor/Show'
import FourOFour from '../FourOFour/Index'

const Index = () => {
    return (
        <div className="admin-master">
            <Layout />
            <div className="main">
                <Switch>
                    <Route exact path="/admin/" component={Dashboard} />
                    <Route exact path="/admin/doctor" component={DoctorIndex} />
                    <Route exact path="/admin/doctor/:id/show" component={DoctorShow} />
                    <Route path="**" component={FourOFour} />
                </Switch>
            </div>
        </div>
    );
};

export default Index;