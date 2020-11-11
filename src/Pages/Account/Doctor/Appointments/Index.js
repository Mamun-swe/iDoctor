import React, { useEffect, useState } from 'react'
import '../../../../Styles/Account/Doctor/Appointments/style.scss'
import axios from 'axios'
import { apiURL } from '../../../../Utils/apiURL'

const Index = () => {
    const [option, setOption] = useState('All')
    const [appointments, setAppointments] = useState([])

    useEffect(() => {
        // Fetch Appointments
        const fetchAppointments = async () => {
            try {
                const result = await axios.get(`${apiURL}users`)
                setAppointments(result.data)
            } catch (error) {
                if (error) {
                    console.log(error.response)
                }
            }
        }
        fetchAppointments()
    }, [])

    // onChange Appointment
    const onChangeAppointment = event => {
        setOption(event.target.value)
    }

    return (
        <div className="index">
            <div className="container-fluid p-0 py-2 py-lg-0">
                <div className="col-12 pl-lg-0 mb-3">
                    <div className="card border-0 shadow">
                        <div className="card-body p-3">
                            <div className="d-flex">
                                <div><h5>{option} Appointments</h5></div>
                                <div className="ml-auto">
                                    <select
                                        className="form-control shadow-none"
                                        onChange={onChangeAppointment}
                                    >
                                        <option>All</option>
                                        <option>Today</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 pl-lg-0">
                    {/* Appointments */}
                    {appointments && appointments.map((appointment, i) =>
                        <div className="d-flex appointment" key={i}>
                            <div>
                                <p>{appointment.name}</p>
                                <small>Date: old || Time: 10:00 PM</small>
                            </div>
                            <div className="ml-auto">
                                <button
                                    type="button"
                                    className="btn shadow-sm"
                                >Take Council</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
};

export default Index;