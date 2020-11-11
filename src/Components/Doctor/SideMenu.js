import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import '../../Styles/Account/Doctor/SideMenu/style.scss'
import { Icon } from 'react-icons-kit'
import {
    ic_apps,
    ic_people,
    ic_info_outline,
    ic_lock
} from 'react-icons-kit/md'

import ProfileImg from '../../Assets/doctor.jpg'
import { ic_edit } from 'react-icons-kit/md'

const SideMenu = ({ editdialog }) => {
    const history = useHistory()

    const doLogout = () => {
        history.push('/')
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
                    <span>appointments</span>
                </NavLink>

                <button
                    type="button"
                    className="btn btn-block shadow-none"
                    onClick={doLogout}
                >
                    <Icon icon={ic_lock} size={18} />
                    <span>logout</span>
                </button>
            </div>

        </div>
    );
};

export default SideMenu;