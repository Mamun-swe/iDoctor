import React, { useEffect, useState } from 'react'
import './style.scss'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import { apiURL } from '../../../../utils/apiURL'
import PreLoading from '../../../../components/Admin/Loader/Index'

const Show = () => {
    const { id } = useParams()
    const [doctor, setDoctor] = useState({})
    const [isLoading, setLoading] = useState(true)
    const [isUpdate, setUpdate] = useState(false)

    useEffect(() => {
        fetchDoctor()
    }, [id])

    // Fetch doctor
    const fetchDoctor = async () => {
        try {
            const response = await axios.get(`${apiURL}admin/doctor/${id}/show`)
            if (response.status === 200) {
                setDoctor(response.data.doctor)
                setLoading(false)
                console.log(response.data.doctor);
            }
        } catch (error) {
            if (error) console.log(error.response)
        }
    }

    // Update account status
    const approveAccount = async (id) => {
        try {
            setUpdate(true)
            const response = await axios.put(`${apiURL}admin/doctor/${id}/account/update/${'approved'}`)
            if (response.status === 201) {
                fetchDoctor()
                setUpdate(false)
                toast.success(response.data.message)
            }
        } catch (error) {
            if (error) console.log(error.response)
        }
    }

    // if API fetch loading
    if (isLoading) return <PreLoading />

    return (
        <div className="admin-doctor-show">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-padding">
                        <div className="card border-0 shadow-sm">
                            <div className="card-body">

                                <h4>{doctor.name}</h4>

                                {doctor.isApproved === 'submitted' ?
                                    <button
                                        type="button"
                                        className="btn shadow-none"
                                        disabled={isUpdate}
                                        onClick={() => approveAccount(doctor._id)}
                                    >{isUpdate ? 'Please wait' : 'Approve'}</button>
                                    : null}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Show;