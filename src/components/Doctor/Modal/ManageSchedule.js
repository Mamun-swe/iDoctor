import React, { useState } from 'react'
import Icon from 'react-icons-kit'
import { ic_clear } from 'react-icons-kit/md'
import '../../../styles/Account/Doctor/Modal/ManageSchedule/style.scss'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import TimePicker from 'react-time-picker'

const formatedDate = () => {
    let today = new Date()
    let dd = String(today.getDate()).padStart(2, '0')
    let mm = String(today.getMonth() + 1).padStart(2, '0')
    let yyyy = today.getFullYear()
    today = mm + '-' + dd + '-' + yyyy
    return today
}

const ManageSchedule = ({ show, hidemodal }) => {
    const [appointDate, setAppointDate] = useState(formatedDate())
    const [appointTime, setAppointTime] = useState('10:00')

    // onChange date
    const onChangeDate = data => {
        let today = data
        let dd = String(today.getDate()).padStart(2, '0')
        let mm = String(today.getMonth() + 1).padStart(2, '0')
        let yyyy = today.getFullYear()
        today = mm + '-' + dd + '-' + yyyy
        setAppointDate(today)
    }

    // onChange Time
    const onChangeTime = data => {
        setAppointTime(data)
    }

    const saveAppoinment = () => {
        console.log(appointDate + ' ' + appointTime)
    }

    if (show === true) {
        return (
            <div className="manage-schedule-modal">
                <div className="backdrop">
                    <div className="custom-modal-dialog">
                        <div className="card border-0 shadow">
                            <div className="card-header bg-white p-3">
                                <div className="d-flex">
                                    <div><h4>Manage Schedule</h4></div>
                                    <div className="ml-auto">
                                        <button
                                            type="button"
                                            className="btn btn-light rounded-circle shadow-none"
                                            onClick={hidemodal}
                                        >
                                            <Icon icon={ic_clear} size={25} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body p-4">
                                <div className="row">
                                    <div className="col-12 col-lg-7 patient-info-column">
                                        <h6>Patient Information</h6>
                                        <table className="table table-sm table-borderless">
                                            <tbody>
                                                <tr>
                                                    <td style={{ width: 100 }}><p>Name:</p></td>
                                                    <td><p>abdullah al mamun</p></td>
                                                </tr>
                                                <tr>
                                                    <td style={{ width: 100 }}><p>age:</p></td>
                                                    <td><p>24 yrs</p></td>
                                                </tr>
                                                <tr>
                                                    <td style={{ width: 100 }}><p>weight:</p></td>
                                                    <td><p>60 kg</p></td>
                                                </tr>
                                                <tr>
                                                    <td style={{ width: 100 }}><p>height:</p></td>
                                                    <td><p>6 feet</p></td>
                                                </tr>
                                                <tr>
                                                    <td style={{ width: 100 }}><p>BP:</p></td>
                                                    <td><p>80/100</p></td>
                                                </tr>
                                                <tr>
                                                    <td style={{ width: 100 }}><p>Problem:</p></td>
                                                    <td><p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="col-12 col-lg-5">
                                        <h6>Set Schedule</h6>
                                        <div className="p-lg-2">
                                            <p>Appointment Date</p>
                                            <Calendar
                                                onChange={onChangeDate}
                                            />
                                        </div>
                                        <div className="p-lg-2 mt-3 mt-lg-0">
                                            <p>Appointment Time</p>
                                            <TimePicker
                                                onChange={onChangeTime}
                                                value={appointTime}
                                            />
                                            <br />
                                            <button
                                                type="button"
                                                className="btn shadow-none px-4"
                                                onClick={saveAppoinment}
                                            >Confirm Appointment</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return null
    }
};

export default ManageSchedule;