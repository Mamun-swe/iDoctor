import React, { useState } from 'react'
import './style.scss'
import { NavLink, useHistory } from 'react-router-dom'
import { Icon } from 'react-icons-kit'
import {
    ic_apps,
    ic_people,
    ic_info_outline,
    ic_lock
} from 'react-icons-kit/md'
import axios from 'axios'
import { apiURL } from '../../../utils/apiURL'

import ProfileImg from '../../../assets/doctor.jpg'
import { ic_edit } from 'react-icons-kit/md'

const SideMenu = ({ editdialog }) => {
    const history = useHistory()
    const [isLoading, setLoading] = useState(false)

    const header = {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") }
    }

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
        <div className="side-menu">

            {/* Header */}
            <div className="header">
                <div className="d-flex">
                    <div className="img-box rounded-circle">
                        <img src={ProfileImg} className="img-fluid" alt="..." />
                    </div>
                    <div className="content">
                        <p>mamun</p>
                        <small>MBBS</small>
                    </div>
                    <div className="ml-auto">
                        <button
                            type="button"
                            className="btn btn-light rounded-circle shadow-none"
                            onClick={() => editdialog(true)}
                        >
                            <Icon icon={ic_edit} size={20} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Body */}
            <div className="body">
                <NavLink
                    exact
                    activeClassName="is-Active"
                    className="btn btn-block shadow-none"
                    to="/doctor/">
                    <Icon icon={ic_apps} size={20} />
                    <span>dashboard</span>
                </NavLink>
                <NavLink
                    exact
                    activeClassName="is-Active"
                    className="btn btn-block shadow-none"
                    to="/doctor/requests">
                    <Icon icon={ic_people} size={20} />
                    <span>appointment requests</span>
                </NavLink>
                <NavLink
                    exact
                    activeClassName="is-Active"
                    className="btn btn-block shadow-none"
                    to="/doctor/appointments">
                    <Icon icon={ic_info_outline} size={20} />
                    <span>pending appointments</span>
                </NavLink>

                <button
                    type="button"
                    className="btn btn-block shadow-none"
                    onClick={doLogout}
                    disabled={isLoading}
                >
                    <Icon icon={ic_lock} size={18} />
                    {isLoading ? <span>Logging out...</span> : <span>logout</span>}
                </button>
            </div>

        </div>
    );
};

export default SideMenu;