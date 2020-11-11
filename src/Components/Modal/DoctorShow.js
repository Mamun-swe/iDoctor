import React from 'react'
import '../../Styles/Modal/doctor-show.scss'
import Icon from 'react-icons-kit'
import { ic_clear, ic_star } from 'react-icons-kit/md'

import DummyImage from '../../Assets/doctor.jpg'

const DoctorShow = ({ show }) => {
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
                    <div className="text-center">
                        <div className="img-box rounded-circle">
                            <img src={DummyImage} className="img-fluid" alt="..." />
                        </div>
                        <br />
                        <h5 className="mb-0 text-capitalize">Dr. rabby</h5>
                        <p>( MBBS, DMC )</p>
                        <Icon icon={ic_star} size={20} />
                        <Icon icon={ic_star} size={20} />
                        <Icon icon={ic_star} size={20} />
                        <Icon icon={ic_star} size={20} />
                        <Icon icon={ic_star} size={20} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorShow;