import React from 'react'
import '../../Styles/Modal/doctor-show.scss'
import Icon from 'react-icons-kit'
import { ic_clear } from 'react-icons-kit/md'

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
            </div>
        </div>
    );
};

export default DoctorShow;