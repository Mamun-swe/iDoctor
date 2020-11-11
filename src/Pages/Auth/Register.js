import React, { useState } from 'react'
import '../../Styles/Auth/style.scss'
// import axios from 'axios'
// import { apiURL } from '../../utils/apiURL';
import { useForm } from "react-hook-form"
import { Link, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Logo from '../../Assets/Static/logo.png'

toast.configure({ autoClose: 2000 })
const Register = () => {
    const history = useHistory()
    const { register, handleSubmit, errors } = useForm()
    const [isLoading, setLoading] = useState(false)

    const onSubmit = async (data) => {
        setLoading(true)
        console.log(data)
        history.push('/login')
        // try {
        //     setLoading(true)
        //     const response = await axios.post("https://colourbangladev.xyz/api/register", data)
        //     if (response.status === 200) {
        //         toast.success("Successfully account created")
        //         setLoading(false)
        //         history.push('/sign-in')
        //     }
        // } catch (error) {
        //     if (error && error.response.status !== 200) {
        //         setLoading(false)
        //         toast.warn(error.response.data.message)
        //     }
        // }
    }


    return (
        <div className="Auth">
            <div className="flex-center flex-column">

                <div className="text-center logo-box">
                    <Link to="/">
                        <img src={Logo} className="img-fluid" alt="..." />
                    </Link>
                </div>

                <div className="card shadow border-0">
                    <div className="card-header text-center bg-white">
                        <h4 className="mb-0">Create Account</h4>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>

                            {/* Name */}
                            <div className="form-group mb-3">
                                {errors.name && errors.name.message ? (
                                    <small className="text-danger">{errors.name && errors.name.message}</small>
                                ) : <small>Name</small>
                                }

                                <input
                                    type="text"
                                    name="name"
                                    className="form-control shadow-none"
                                    placeholder="Your name"
                                    ref={register({
                                        required: "Name is required",
                                        minLength: {
                                            value: 5,
                                            message: "Minimun length 5 character"
                                        }
                                    })}
                                />
                            </div>

                            {/* E-mail */}
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
                                    ref={register({
                                        required: "E-mail is required",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Invalid email address"
                                        }
                                    })}
                                />
                            </div>

                            {/* Account type */}
                            <div className="form-group mb-3">
                                {errors.account_type && errors.account_type.message ? (
                                    <small className="text-danger">{errors.account_type && errors.account_type.message}</small>
                                ) : <small>Account type</small>
                                }

                                <select
                                    name="account_type"
                                    className="form-control shadow-none pl-1"
                                    ref={register({
                                        required: "Account type is required"
                                    })}
                                >
                                    <option value="patient">Patient</option>
                                    <option value="doctor">Doctor</option>
                                </select>
                            </div>

                            {/* Password */}
                            <div className="form-group mb-3">
                                {errors.password && errors.password.message ? (
                                    <small className="text-danger">{errors.password && errors.password.message}</small>
                                ) : <small>Password</small>
                                }

                                <input
                                    type="password"
                                    name="password"
                                    className="form-control shadow-none"
                                    placeholder="*****"
                                    ref={register({
                                        required: "Please enter password",
                                        minLength: {
                                            value: 8,
                                            message: "Minimun length 8 character"
                                        }
                                    })}
                                />
                            </div>

                            <button type="submit" className="btn btn-block shadow-none">
                                {isLoading ? <span>Loading...</span> : <span>Submit</span>}
                            </button>

                        </form>

                        <div className="text-right mt-1">
                            <p>Already have an account ? <Link to="/login">Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;