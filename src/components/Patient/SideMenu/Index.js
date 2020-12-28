import React, { useState, useEffect } from 'react'
import './style.scss'
import { NavLink, useHistory } from 'react-router-dom'
import { Icon } from 'react-icons-kit'
import {
    ic_apps,
    ic_people,
    ic_person,
    ic_lock
} from 'react-icons-kit/md'
import axios from 'axios'
import { apiURL } from '../../../utils/apiURL'

import fakeImg from '../../../assets/Static/vector.jpg'

const Index = () => {
    const history = useHistory()
    const [user, setUser] = useState({})
    const [isLoading, setLoading] = useState(false)

    // header
    const header = {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") }
    }

    useEffect(() => {
        // Fetch Logged User
        const loggedUser = async () => {
            try {
                const response = await axios.get(`${apiURL}auth/me`, header)
                setUser(response.data.user)
                console.log(response.data.user)
            } catch (error) {
                if (error)
                    console.log(error.response)
            }
        }

        loggedUser()
    }, [])

    // Logout
    const doLogout = async () => {
        try {
            setLoading(true)
            const response = await axios.get(`${apiURL}auth/logout`, header)
            if (response.status === 200) {
                localStorage.clear()
                history.push('/')
            }
        } catch (error) {
            if (error)
                console.log(error.response)
        }
    }

    return (
        <div className="patient-sidemenu">
            {/* Header */}
            <div className="header">
                <div className="d-flex">
                    <div className="img-box rounded-circle">
                        {user.image ?
                            <img src={user.image} className="img-fluid" alt="..." />
                            : <img src={fakeImg} className="img-fluid" alt="..." />}
                    </div>
                    <div className="content pt-3">
                        <p>{user.name}</p>
                    </div>
                </div>
            </div>

            {/* Body */}
            <div className="body">
                <NavLink
                    exact
                    activeClassName="is-Active"
                    className="btn btn-block shadow-none"
                    to="/patient/">
                    <div className="icon-box rounded-circle border">
                        <div className="flex-center flex-column">
                            <Icon icon={ic_apps} size={20} />
                        </div>
                    </div>
                    <p>dashboard</p>
                </NavLink>

                <NavLink
                    exact
                    activeClassName="is-Active"
                    className="btn btn-block shadow-none"
                    to="/patient/appointments">

                    <div className="icon-box rounded-circle border">
                        <div className="flex-center flex-column">
                            <Icon icon={ic_person} size={20} />
                        </div>
                    </div>
                    <p>my profile</p>
                </NavLink>

                <NavLink
                    exact
                    activeClassName="is-Active"
                    className="btn btn-block shadow-none"
                    to="/patient/requests">

                    <div className="icon-box rounded-circle border">
                        <div className="flex-center flex-column">
                            <Icon icon={ic_people} size={20} />
                        </div>
                    </div>
                    <p>appointments</p>
                </NavLink>


                <button
                    type="button"
                    className="btn btn-block shadow-none"
                    onClick={doLogout}
                    disabled={isLoading}
                >
                    <div className="icon-box rounded-circle border">
                        <div className="flex-center flex-column">
                            <Icon icon={ic_lock} size={18} />
                        </div>
                    </div>
                    {isLoading ? <span>Logging out...</span> : <span>logout</span>}
                </button>
            </div>

        </div>
    );
}

export default Index;