import React, { useState } from 'react'
import './style.scss'
import Icon from 'react-icons-kit'
import { ic_clear, ic_star } from 'react-icons-kit/md'

import Toast from '../../../Toast-Notification/Index'
import AppointmentModal from '../GetAppointment/Index'

import DummyImage from '../../../../assets/doctor.jpg'

const Index = ({ show, doctor }) => {
    const [appointment, setAppointment] = useState(false)
    const [isLoading, setLoading] = useState(false)

    const handleAppointment = () => {
        setAppointment(true)
    }

    const hideAppoinment = () => {
        setAppointment(false)
    }

    const submitAppointment = async (data) => {
        console.log(data)
        setLoading(true)
        return (
            <Toast
                toast="success"
                position="top-right"
                title="Successfully"
                message="Profile updated."
            />
        )
    }

    return (
        <div className="doctor-show shadow">
            <div className="info-container p-3">
                <div className="header">
                    <button
                        type="button"
                        className="btn btn-light p-1 shadow-none rounded-circle"
                        onClick={show}
                    >
                        <Icon icon={ic_clear} size={30} />
                    </button>
                </div>

                {/* Body */}
                <div className="body pt-3">
                    {/* Basic Info */}
                    <div className="text-center">
                        <div className="img-box rounded-circle">
                            <img src={DummyImage} className="img-fluid" alt="..." />
                        </div>
                        <br />
                        <h5 className="mb-0 text-capitalize">{doctor.name}</h5>
                        <p>( MBBS, DMC )</p>
                        <Icon icon={ic_star} size={20} />
                        <Icon icon={ic_star} size={20} />
                        <Icon icon={ic_star} size={20} />
                        <Icon icon={ic_star} size={20} />
                        <Icon icon={ic_star} size={20} />
                    </div>
                    {/* Current Hospital */}
                    <div className="mt-3">
                        <h6 className="mb-0">Current Hospital</h6>
                        <p>demo hospital</p>
                    </div>
                    {/* Schedule */}
                    <div className="mt-3">
                        <h6 className="mb-2">Councilling Schedule</h6>
                        <table className="table table-sm table-bordered">
                            <thead>
                                <tr>
                                    <th>Day</th>
                                    <th>Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>saturday</th>
                                    <th>12:00 PM</th>
                                </tr>
                                <tr>
                                    <th>saturday</th>
                                    <th>12:00 PM</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* Fee */}
                    <div className="mt-3">
                        <h6 className="mb-0">Councilling Fee</h6>
                        <p>100 tk.</p>
                    </div>

                    <div className="my-3 text-center">
                        <button
                            type="button"
                            className="btn shadow-none"
                            onClick={handleAppointment}
                        >Get Appointment</button>
                    </div>
                </div>
            </div>

            {/* Appointment Modal */}
            {appointment ?
                <AppointmentModal
                    hidemodal={hideAppoinment}
                    appointment={submitAppointment}
                    loading={isLoading}
                /> : null}
        </div>
    );
};

export default Index;