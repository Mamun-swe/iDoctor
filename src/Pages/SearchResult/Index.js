import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { apiURL } from '../../Utils/apiURL'

import NavbarComponent from '../../Components/Navbar/Index'
import SearchComponent from '../../Components/Search/Index'
import DoctorsListComponent from '../../Components/DoctorsList/Index'
import FooterCompoent from '../../Components/Footer/Index'

const Index = () => {
    const [doctors, setDoctors] = useState([])

    useEffect(() => {
        // Search Doctors
        const searchDoctors = async () => {
            try {
                const response = await axios.get(`${apiURL}users`)
                setDoctors(response.data)
            } catch (error) {
                if (error) console.log(error.response)
            }
        }
        searchDoctors()
    }, [])

    return (
        <div>
            <NavbarComponent />

            <div className="search-result-index">
                <div className="container">
                    <div className="row">
                        <div className="col-12 py-4">
                            <SearchComponent />
                        </div>
                        <div className="col-12 py-4 py-lg-5 text-center">
                            <h3 className="font-weight-bold mb-0">Found {doctors ? doctors.length : null} doctors.</h3>
                        </div>
                    </div>
                </div>

                {/* Results */}
                <DoctorsListComponent doctors={doctors} />
            </div>

            <FooterCompoent />
        </div>
    );
};

export default Index;