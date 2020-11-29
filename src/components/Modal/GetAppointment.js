import React, { useState } from 'react'
import Icon from 'react-icons-kit'
import { ic_clear } from 'react-icons-kit/md'
import '../../styles/Modal/get-appointment.scss'
import { useForm } from "react-hook-form"

const GetAppointment = ({ hidemodal }) => {
    const { register, handleSubmit, errors } = useForm()
    const [isLoading, setLoading] = useState(false)

    const onSubmit = async (data) => {
        setLoading(true)
        console.log(data)

    }

    return (
        <div className="appointment-modal">
            <div className="backdrop">
                <div className="custom-modal shadow">
                    {/* Header */}
                    <div className="custom-modal-header">
                        <div className="d-flex">
                            <div className="flex-fill text-right">
                                <h5 className="mb-0">Fill-Up the form</h5>
                            </div>
                            <div className="flex-fill text-right">
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

                    {/* Body */}
                    <div className="custom-modal-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="row">

                                {/* Name */}
                                <div className="col-12 col-lg-6">
                                    <div className="form-group mb-3">
                                        {errors.name && errors.name.message ? (
                                            <small className="text-danger">{errors.name && errors.name.message}</small>
                                        ) : <small>Name</small>
                                        }

                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control shadow-none"
                                            placeholder="Enter your name"
                                            ref={register({
                                                required: "Name is required"
                                            })}
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="col-12 col-lg-6">
                                    <div className="form-group mb-3">
                                        {errors.email && errors.email.message ? (
                                            <small className="text-danger">{errors.email && errors.email.message}</small>
                                        ) : <small>E-mail</small>
                                        }

                                        <input
                                            type="text"
                                            name="email"
                                            className="form-control shadow-none"
                                            placeholder="example@gmail.com"
                                            readOnly
                                            defaultValue="mamun@gmail.com"
                                            ref={register({
                                                required: "E-mail is required",
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message: "Invalid email address"
                                                }
                                            })}
                                        />
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="col-12 col-lg-6">
                                    <div className="form-group mb-3">
                                        {errors.phone && errors.phone.message ? (
                                            <small className="text-danger">{errors.phone && errors.phone.message}</small>
                                        ) : <small>Phone number</small>
                                        }

                                        <input
                                            type="text"
                                            name="phone"
                                            className="form-control shadow-none"
                                            placeholder="01xxxxxxxxx"
                                            ref={register({
                                                required: "Phone number is required"
                                            })}
                                        />
                                    </div>
                                </div>

                                {/* Age */}
                                <div className="col-12 col-lg-6">
                                    <div className="form-group mb-3">
                                        {errors.age && errors.age.message ? (
                                            <small className="text-danger">{errors.age && errors.age.message}</small>
                                        ) : <small>Age</small>
                                        }

                                        <input
                                            type="number"
                                            name="age"
                                            className="form-control shadow-none"
                                            placeholder="Enter age"
                                            ref={register({
                                                required: "Age is required"
                                            })}
                                        />
                                    </div>
                                </div>

                                {/* Weight */}
                                <div className="col-12 col-lg-6">
                                    <div className="form-group mb-3">
                                        {errors.weight && errors.weight.message ? (
                                            <small className="text-danger">{errors.weight && errors.weight.message}</small>
                                        ) : <small>Weight</small>
                                        }

                                        <input
                                            type="number"
                                            name="weight"
                                            className="form-control shadow-none"
                                            placeholder="Enter weight (20, 50 KG)"
                                            ref={register({
                                                required: "Weight is required"
                                            })}
                                        />
                                    </div>
                                </div>

                                {/* Height */}
                                <div className="col-12 col-lg-6">
                                    <div className="form-group mb-3">
                                        {errors.height && errors.height.message ? (
                                            <small className="text-danger">{errors.height && errors.height.message}</small>
                                        ) : <small>Height</small>
                                        }

                                        <input
                                            type="number"
                                            name="height"
                                            className="form-control shadow-none"
                                            placeholder="Enter height (5, 6 feet)"
                                            ref={register({
                                                required: "Height is required"
                                            })}
                                        />
                                    </div>
                                </div>

                                {/* BP */}
                                <div className="col-12">
                                    <div className="form-group mb-3">
                                        {errors.blood_pressure && errors.blood_pressure.message ? (
                                            <small className="text-danger">{errors.blood_pressure && errors.blood_pressure.message}</small>
                                        ) : <small>Blood pressure</small>
                                        }

                                        <input
                                            type="text"
                                            name="blood_pressure"
                                            className="form-control shadow-none"
                                            placeholder="Enter BP (50/60, 60/70)"
                                            ref={register({
                                                required: "Blood pressure is required"
                                            })}
                                        />
                                    </div>
                                </div>

                                {/* Problem */}
                                <div className="col-12">
                                    <div className="form-group mb-3">
                                        {errors.basic_problem && errors.basic_problem.message ? (
                                            <small className="text-danger">{errors.basic_problem && errors.basic_problem.message}</small>
                                        ) : <small>Basic problem</small>
                                        }

                                        <textarea
                                            type="text"
                                            name="basic_problem"
                                            className="form-control shadow-none"
                                            placeholder="Discuss the basic problem"
                                            rows="4"
                                            ref={register({
                                                required: "Basic problem is required"
                                            })}
                                        />
                                    </div>
                                </div>

                                <div className="col-12 text-right">
                                    <button
                                        type="submit"
                                        className="btn shadow-none"
                                    >
                                        {isLoading ? <span>Submitting...</span> : <span>Submit</span>}
                                    </button>
                                </div>



                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetAppointment;