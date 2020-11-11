import React, { useState } from 'react'
import '../../Styles/Navbar/style.scss'
import { Icon } from 'react-icons-kit'
import { Link, NavLink } from 'react-router-dom'
import { ic_menu, ic_close } from 'react-icons-kit/md'

import Logo from '../../Assets/Static/logo.png'

const Index = () => {
    const [isShow, setShow] = useState(false)

    return (
        <div className="custom-navbar">
            <div className="main-navbar">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex">
                                {/* Logo */}
                                <div className="logo">
                                    <Link to="/">
                                        <img src={Logo} className="img-fluid" alt="..." />
                                    </Link>
                                </div>

                                {/* Toggle Bars */}
                                <div className="ml-auto d-lg-none">
                                    <Icon
                                        icon={ic_menu}
                                        size={25}
                                        className="bars"
                                        onClick={() => setShow(true)}
                                    />
                                </div>

                                {/* Menu bar backdrop */}
                                <div className={isShow ?
                                    "ml-auto page-links-menu-bar show-backdrop" :
                                    "ml-auto page-links-menu-bar"} >
                                    {/* Close area */}
                                    <div className="menu-close d-lg-none">
                                        <Icon
                                            icon={ic_close}
                                            size={35}
                                            className="close-icon"
                                            onClick={() => setShow(false)}
                                        />
                                    </div>
                                    {/* Menu */}
                                    < div className={isShow ? "my-menu open-sidemenu" : "my-menu"} >
                                        <ul>
                                            <li><NavLink activeClassName="is-Active" exact to="/">home</NavLink></li>
                                            <li><NavLink activeClassName="is-Active" exact to="/about-us">about</NavLink></li>
                                            <li><NavLink activeClassName="is-Active" exact to="/contact-us">contact</NavLink></li>
                                            <li><NavLink activeClassName="is-Active" exact to="/login">login</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="break"></div>
        </div>
    );
};

export default Index;