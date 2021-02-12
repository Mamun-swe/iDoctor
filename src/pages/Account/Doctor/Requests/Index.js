
import React, { useEffect, useState, useCallback } from 'react'
import './style.scss'
import axios from 'axios'
import { apiURL } from '../../../../utils/apiURL'

import ManageScheduleModal from '../../../../components/Doctor/Modal/ManageSchedule/Index'

const Index = () => {
    const [show, setShow] = useState(false)
    const [requests, setRequests] = useState([])
    const [patient, setPatient] = useState(null)
    const [id] = useState(localStorage.getItem('id'))
    const [header] = useState({
        headers: { Authorization: "Bearer " + localStorage.getItem("token") }
    })

    // get all appointments requests
    const getRequests = useCallback(async () => {
        try {
            const response = await axios.get(`${apiURL}doctor/appointment/${id}/index`, header)
            if (response.status === 200) {
                console.log(response.data.requests)
                setRequests(response.data.requests)
            }
        } catch (error) {
            if (error) {
                console.log(error.response)
            }
        }
    }, [id, header])


    useEffect(() => {
        getRequests()
    }, [id, header, getRequests])

    // Hide Modal
    const hideModal = () => setShow(false)

    // Handle modal
    const handleModal = data => {
        let patient = data.patient
        patient.id = data.patientId._id
        setPatient(patient)
        setShow(true)
    }


    return (
        <div className="index">
            <div className="container-fluid p-0 py-2 py-lg-0">
                <div className="col-12 pl-lg-0 mb-3">
                    <h4>Appointment Requests</h4>
                </div>

                <div className="col-12 pl-lg-0">
                    {/* Requests */}
                    {requests && requests.map((request, i) =>
                        <div className="d-flex request" key={i}>
                            <div className="pt-2">
                                <p>{request.patient.name}</p>
                                {/* <small>patient type: old</small> */}
                            </div>
                            <div className="ml-auto">
                                <button
                                    type="button"
                                    className="btn shadow-sm"
                                    onClick={() => handleModal(request)}
                                >Manage schedule</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Modal */}
            {show ? <ManageScheduleModal show={show} patientinfo={patient} hidemodal={hideModal} /> : null}
        </div>
    );
};

export default Index;