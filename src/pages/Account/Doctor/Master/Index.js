import React, { useState, useEffect } from 'react'
import './style.scss'
import axios from 'axios'
import { apiURL } from '../../../../utils/apiURL'
import { Switch, Route } from 'react-router-dom'
import Icon from 'react-icons-kit'
import { ic_dehaze } from 'react-icons-kit/md'

import SideMenuComponent from '../../../../components/Doctor/SideMenu/Index'
import ProfileUpdateModal from '../../../../components/Doctor/Modal/ProfileUpdate/Index'
import DashboardIndex from '../Dashboard/Index'
import RequestsIndex from '../AppointmentRequest/Index'
import AppointmentsIndex from '../PendingAppointments/Index'

import StepOne from '../../../../components/Doctor/ProfileUpdateSteps/StepOne'
import StepTwo from '../../../../components/Doctor/ProfileUpdateSteps/StepTwo'
import StepThree from '../../../../components/Doctor/ProfileUpdateSteps/StepThree'
import StepFour from '../../../../components/Doctor/ProfileUpdateSteps/StepFour'
import StepFive from '../../../../components/Doctor/ProfileUpdateSteps/StepFive'


const Master = () => {
    const [show, setShow] = useState(false)
    const [doctor, setDoctor] = useState({})
    const [isDaialog, setDaialog] = useState(false)
    const [step, setStep] = useState(null)
    const [header] = useState({
        headers: { Authorization: "Bearer " + localStorage.getItem("token") }
    })

    useEffect(() => {
        // Fetch Logged User
        const loggedDoctor = async () => {
            try {
                const response = await axios.get(`${apiURL}doctor/me`, header)
                if (response.status === 200) {
                    setDoctor(response.data.doctor)
                    setStep(response.data.doctor.updateStep)
                    console.log(response.data.doctor)
                }
            } catch (error) {
                if (error)
                    console.log(error.response)
            }
        }

        loggedDoctor()
    }, [header])

    // Handle Edit
    const handleProfileEdit = data => {
        setDaialog(data)
    }

    // Update Response 
    const updateResponse = responseStep => {
        setStep(responseStep)
    }


    if (doctor.isApproved === "pending") {
        return (
            <div className="update-page">
                <div className="flex-center flex-column">
                    <div className="card rounded-0 border-0 shadow">
                        <div className="card-header bg-white p-4">
                            <h5 className="mb-0">Hello doctor !</h5>
                            <p className="mb-0">Your account has been deactivated, fill all field & submit to active.</p>
                        </div>
                        <div className="card-body p-4">

                            {/* Progress */}
                            <small>Profile updated</small>
                            <div className="progress mb-3">
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: doctor.updateRange + '%' }}
                                    aria-valuenow={doctor.updateRange}
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                >{doctor.updateRange}%</div>
                            </div>

                            {/* Update Steps */}
                            {step === 1 ?
                                <StepOne responsestep={updateResponse} />
                                : step === 2 ?
                                    <StepTwo />
                                    : step === 3 ?
                                        <StepThree />
                                        : step === 4 ?
                                            <StepFour />
                                            : step === 5 ?
                                                <StepFive />
                                                : null}

                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="master">
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
                        <SideMenuComponent editdialog={handleProfileEdit} doctor={doctor} />
                    </div>
                </div>

                {/* Main */}
                <div className="main flex-fill">
                    <Switch>
                        <Route exact path="/doctor/" component={DashboardIndex} />
                        <Route exact path="/doctor/requests" component={RequestsIndex} />
                        <Route exact path="/doctor/appointments" component={AppointmentsIndex} />
                    </Switch>
                </div>
            </div>

            {/* Profile Update Modal */}
            {isDaialog ?
                <ProfileUpdateModal editdialog={handleProfileEdit} />
                : null}
        </div>
    );
};

export default Master;