import React, { useState, useEffect } from 'react'
import './style.scss'
import { Switch, Route } from 'react-router-dom'
import Icon from 'react-icons-kit'
import { ic_dehaze } from 'react-icons-kit/md'
import axios from 'axios'
import { apiURL } from '../../../../utils/apiURL'

import SideMenu from '../../../../components/Patient/SideMenu/Index'
import DashboardIndex from '../Dashboard/Index'
import ProfileIndex from '../Profile/Index'
import FourOFour from '../../../FourOFour/Index'

const Master = () => {
    const [show, setShow] = useState(false)
    const [user, setUser] = useState({})
    const [header] = useState({
        headers: { Authorization: "Bearer " + localStorage.getItem("token") }
    })

    useEffect(() => {
        // Fetch Logged User
        const loggedUser = async () => {
            try {
                const response = await axios.get(`${apiURL}auth/me`, header)
                setUser(response.data.user)
            } catch (error) {
                if (error) console.log(error.response)
            }
        }

        loggedUser()
    }, [header])

    return (
        <div className="patient-master">
            {/* Mobile Navbar */}
            <div className="mobile-navbar d-lg-none p-3">
                <div className="d-flex">
                    <div><p>mamun</p></div>
                    <div className="ml-auto">
                        <button
                            type="button"
                            className="btn btn-light rounded-circle shadow-none"
                            onClick={() => setShow(true)}
                        >
                            <Icon icon={ic_dehaze} size={25} />
                        </button>
                    </div>
                </div>
            </div>
            <div className="d-flex">

                {/* Sidebar */}
                <div className="sidebar">
                    <div
                        className={show ? "backdrop open-backdrop" : "backdrop"}
                        onClick={() => setShow(false)}
                    ></div>
                    <div className={show ? "main-sidebar open-main-sidebar" : "main-sidebar"}>
                        <SideMenu user={user} />
                    </div>
                </div>

                {/* Main */}
                <div className="main flex-fill">
                    <Switch>
                        <Route exact path="/patient/" component={DashboardIndex} />
                        <Route exact path="/patient/profile">
                            <ProfileIndex user={user} />
                        </Route>
                        <Route path="*" component={FourOFour} />
                    </Switch>
                </div>
            </div>

        </div>
    );
};

export default Master;