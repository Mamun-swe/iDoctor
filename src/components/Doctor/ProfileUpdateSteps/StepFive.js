import React, { useState } from 'react'
import './style.scss'
import Icon from 'react-icons-kit'
import { ic_add, ic_close } from 'react-icons-kit/md'

const StepFive = () => {
    const [inputFields, setInputFields] = useState([
        { day: '', time: '' }
    ])

    const handleAddFields = () => {
        const values = [...inputFields];
        values.push({ day: '', time: '' })
        setInputFields(values)
    }

    const handleRemoveFields = index => {
        const values = [...inputFields]
        values.splice(index, 1)
        setInputFields(values)
    }


    return (
        <div className="step">
            <div className="mb-4">
                <h6>Council hour</h6>
            </div>
            <form>

                {inputFields.map((inputField, i) => (
                    <div className="row mb-2" key={i}>
                        <div className="col-12 col-lg-6 pr-md-2">
                            <p>Day</p>
                            <input
                                type="text"
                                className="form-control shadow-none"
                            />
                        </div>
                        <div className="col-12 col-lg-6 pl-md-2">
                            <p>Time</p>
                            <div className="d-flex">
                                <div className="flex-fill">
                                    <input
                                        type="date"
                                        className="form-control shadow-none"
                                    />
                                </div>
                                <div className="pl-2">
                                    <button
                                        type="button"
                                        className="btn add-btn shadow-none"
                                        onClick={handleAddFields}
                                        style={styles.smBtn}
                                    >
                                        <Icon icon={ic_add} size={20} />
                                    </button>
                                </div>
                                <div className="pl-2">
                                    <button
                                        type="button"
                                        className="btn add-btn shadow-none"
                                        onClick={handleRemoveFields}
                                        style={styles.smBtn}
                                    >
                                        <Icon icon={ic_close} size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </form>
        </div>
    );
}

export default StepFive;

const styles = {
    smBtn: {
        padding: '8px 10px'
    }
}