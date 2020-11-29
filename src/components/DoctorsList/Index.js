import React, { useState } from 'react'
import '../../styles/DoctorsList/style.scss'

import DoctorShowComponent from '../Modal/DoctorShow'

import DoctorImg from '../../assets/doctor.jpg'

const Index = ({ doctors }) => {
    const [show, setShow] = useState(false)
    const [doctor, setDoctor] = useState()

    const closeShow = () => {
        setShow(false)
    }

    // Show Doctor Info
    const shwoDoctorInfo = data => {
        setShow(true)
        setDoctor(data)
    }

    return (
        <div className="doctors-list-component">
            <div className="container">
                <div className="row">

                    {doctors && doctors.map((doctor, i) =>
                        <div className="col-6 col-md-4 col-lg-3" key={i}>
                            <div className="card doctor-card">
                                <div
                                    className="card-body"
                                    onClick={() => shwoDoctorInfo(doctor)}
                                >
                                    <div className="img-box rounded-circle">
                                        <img src={DoctorImg} className="img-fluid" alt="..." />
                                    </div>
                                    <div className="content">
                                        <h6>{doctor.username} <span>(medicine)</span></h6>
                                        <p>MBBS, DMC</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>

            {/* Show Doctor */}
            {show ? <DoctorShowComponent show={closeShow} doctor={doctor} /> : null}
        </div>
    );
};

export default Index;