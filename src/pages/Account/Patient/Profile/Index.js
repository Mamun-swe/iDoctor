import React, { useState } from 'react'
import './style.scss'
import { useForm } from 'react-hook-form'
import { Images } from '../../../../utils/Images'

const Index = ({ user }) => {
    const { register, handleSubmit, errors } = useForm()
    const [selectedFile, setSelectedFile] = useState(null)
    const [previewURL, setPreviewURL] = useState(null)
    const [isUpload, setUpload] = useState(false)

    // Image onChange
    const imageChangeHandeller = event => {
        let file = event.target.files[0]
        if (file) {
            setSelectedFile(file)
            setPreviewURL(URL.createObjectURL(event.target.files[0]))
            setUpload(true)
        }
    }

    const onSubmit = async (data) => {
        console.log(data)
    }

    return (
        <div className="patient-profile">
            <div className="container-fluid py-3 py-lg-0">
                <div className="row">
                    <div className="col-12 pl-lg-0">
                        <div className="card border-0 shadow">
                            <div className="card-body px-md-4">

                                {/* Image Container */}
                                <div className="img-container text-center">
                                    <div className="image rounded-circle border">
                                        {user && user.image ?
                                            <img src={user.image} className="img-fluid" alt="..." />
                                            : previewURL ?
                                                <img src={previewURL} className="img-fluid" alt="..." />
                                                : <img src={Images.FakeUser} className="img-fluid" alt="..." />}
                                        <div className="overlay">
                                            <div className="flex-center flex-column">
                                                {isUpload ? null : <input type="file" className="upload" onChange={imageChangeHandeller} />}
                                                {isUpload ?
                                                    <p className="mb-0">Uploading...</p>
                                                    : <p className="mb-0">Change</p>}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <br />
                                {/* Form */}
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="row">
                                        {/* Name */}
                                        <div className="col-12 col-md-6 pr-md-2">
                                            <div className="form-group mb-3">
                                                {errors.name && errors.name.message ? (
                                                    <p className="text-danger">{errors.name && errors.name.message}</p>
                                                ) : <p>Name</p>
                                                }


                                                <input
                                                    type="text"
                                                    name="name"
                                                    defaultValue={user ? user.name : null}
                                                    className="form-control shadow-none"
                                                    placeholder="Name"
                                                    ref={register({
                                                        required: "Name is required"
                                                    })}
                                                />
                                            </div>
                                        </div>

                                        {/* Email */}
                                        <div className="col-12 col-md-6 pl-md-2">
                                            <div className="form-group mb-3">
                                                <p>Email</p>
                                                <input
                                                    type="text"
                                                    name="email"
                                                    defaultValue={user ? user.email : null}
                                                    className="form-control shadow-none"
                                                    readOnly
                                                />
                                            </div>
                                        </div>

                                        {/* Age */}
                                        <div className="col-12 col-md-6 pr-md-2">
                                            <div className="form-group mb-3">
                                                {errors.age && errors.age.message ? (
                                                    <p className="text-danger">{errors.age && errors.age.message}</p>
                                                ) : <p>Age</p>
                                                }

                                                <input
                                                    type="number"
                                                    name="age"
                                                    className="form-control shadow-none"
                                                    ref={register({
                                                        required: "Age is required"
                                                    })}
                                                />
                                            </div>
                                        </div>

                                        {/* Height */}
                                        <div className="col-12 col-md-6 pl-md-2">
                                            <div className="form-group mb-3">
                                                {errors.height && errors.height.message ? (
                                                    <p className="text-danger">{errors.height && errors.height.message}</p>
                                                ) : <p>Height</p>
                                                }

                                                <input
                                                    type="text"
                                                    name="height"
                                                    className="form-control shadow-none"
                                                    ref={register({
                                                        required: "Height is required"
                                                    })}
                                                />
                                            </div>
                                        </div>

                                        {/* Weight */}
                                        <div className="col-12 col-md-6 pr-md-2">
                                            <div className="form-group mb-3">
                                                {errors.weight && errors.weight.message ? (
                                                    <p className="text-danger">{errors.weight && errors.weight.message}</p>
                                                ) : <p>Weight</p>
                                                }

                                                <input
                                                    type="number"
                                                    name="weight"
                                                    className="form-control shadow-none"
                                                    placeholder="Weight (Kg)"
                                                    ref={register({
                                                        required: "Weight is required"
                                                    })}
                                                />
                                            </div>
                                        </div>

                                        {/* Blood pressure */}
                                        <div className="col-12 col-md-6 pl-md-2">
                                            <div className="form-group mb-3">
                                                {errors.bloodPressure && errors.bloodPressure.message ? (
                                                    <p className="text-danger">{errors.bloodPressure && errors.bloodPressure.message}</p>
                                                ) : <p>Blood pressure</p>
                                                }

                                                <input
                                                    type="text"
                                                    name="bloodPressure"
                                                    className="form-control shadow-none"
                                                    ref={register({
                                                        required: "Blood pressure is required"
                                                    })}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-12 text-right">
                                            <button
                                                type="submit"
                                                className="btn shadow-none"
                                            >Update</button>
                                        </div>
                                    </div>

                                </form>



                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Index;