import React, { useEffect, useState } from 'react'
import '../../../../styles/Account/Doctor/Appointment-Request/style.scss'
import axios from 'axios'
import { apiURL } from '../../../../utils/apiURL'

import ManageScheduleModal from '../../../../components/Doctor/Modal/ManageSchedule'

const Index = () => {
    const [show, setShow] = useState(false)
    const [requests, setRequests] = useState([])

    useEffect(() => {
        // Fetch Requests
        const fetchRequests = async () => {
            try {
                const result = await axios.get(`${apiURL}users`)
                setRequests(result.data)
            } catch (error) {
                if (error) {
                    console.log(error.response)
                }
            }
        }
        fetchRequests()
    }, [])

    // Hide Modal
    const hideModal = () => {
        setShow(false)
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
                            <div>
                                <p>{request.name}</p>
                                <small>patient type: old</small>
                            </div>
                            <div className="ml-auto">
                                <button
                                    type="button"
                                    className="btn shadow-sm"
                                    onClick={() => setShow(true)}
                                >Manage schedule</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Modal */}
            <ManageScheduleModal show={show} hidemodal={hideModal} />
        </div>
    );
};

export default Index;