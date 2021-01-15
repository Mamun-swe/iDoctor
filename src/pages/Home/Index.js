import React, { useState, useEffect } from 'react'
import './style.scss'
import axios from 'axios'
import { apiURL } from '../../utils/apiURL'

import NavbarComponent from '../../components/User/Navbar/Index'
import SearchComponent from '../../components/User/Search/Index'
import DoctorsListComponent from '../../components/User/DoctorsList/Index'
import FooterCompoent from '../../components/User/Footer/Index'

import SearchPeopleImg from '../../assets/Static/people_search.png'
import ServiceImg from '../../assets/Static/service.png'
import { Link } from 'react-router-dom'

const Index = () => {
    const [latitude, setLatitude] = useState()
    const [longitude, setLongitude] = useState()
    const [doctors, setDoctors] = useState([])
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        const geo = navigator.geolocation;
        if (!geo) {
            alert('Geolocation is not supported');
            return;
        }

        navigator.geolocation.getCurrentPosition(function (position) {
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)
        })

        // Fetch Doctors
        const fetchDoctors = async () => {
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/users`)
                setDoctors(response.data)
                setLoading(false)
            } catch (error) {
                if (error) console.log(error.response)
            }
        }
        fetchDoctors()
    }, [])

    return (
        <div className="home">
            <NavbarComponent />

            {/* Header Banner */}
            <div className="header py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6 content d-none d-lg-block">
                            <h1>Search Doctor</h1>
                            <h5>Choose your nearest specialist.</h5>
                        </div>
                        <div className="col-12 col-lg-6 image-column text-center">
                            <img src={SearchPeopleImg} alt="..." />
                        </div>
                        <div className="col-12 col-lg-6 content d-lg-none text-center">
                            <h1>Search Doctor</h1>
                            <h5>Choose nearest doctor.</h5>
                        </div>
                    </div>
                </div>
            </div>

            {/* Search Component */}
            <SearchComponent lat={latitude} lang={longitude} />

            {/* Nearest or Suggested Doctors */}
            <div className="suggested-doctors">
                <div className="container mb-4">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2>Nearest Doctors</h2>
                        </div>
                    </div>
                </div>
                <DoctorsListComponent doctors={doctors} loading={isLoading} />
            </div>

            {/* Service */}
            <div className="service">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6 text-center text-lg-left content">
                            <h1>We Provide</h1>
                            <h3>24/7 hour service</h3>
                            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an.</p>
                            <Link to="/contact-us"
                                type="button"
                                className="btn shadow-none"
                            >Contact Us</Link>
                        </div>
                        <div className="col-12 col-lg-6 text-center text-lg-right mt-4 mt-lg-0">
                            <img src={ServiceImg} className="img-fluid" alt="..." />
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <FooterCompoent />
        </div>
    );
};

export default Index;