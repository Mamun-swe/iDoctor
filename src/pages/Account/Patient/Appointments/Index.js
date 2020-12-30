import React from 'react'
import './style.scss'

const Index = () => {

    // Open chat window
    const openChatWindow = () => {
        window.open(`/council/messages/${123}`, "", "top=0, left=0")
    }

    return (
        <div className="appointments">
            <div className="container-fluid py-3 py-lg-0">
                <div className="row">
                    <div className="col-12 pl-lg-0">
                        <div className="card border-0 shadow">
                            <div className="card-header p-4 bg-white">
                                <h5 className="mb-0">Your appointments</h5>
                            </div>
                            <div className="card-body px-md-4">
                                <table className="table table-sm table-borderless">
                                    <thead>
                                        <tr>
                                            <td>SL</td>
                                            <td>Doctor name</td>
                                            <td>Date</td>
                                            <td>Time</td>
                                            <td className="text-center">Action</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><p>1</p></td>
                                            <td><p>Doctor name</p></td>
                                            <td><p>Date</p></td>
                                            <td><p>Time</p></td>
                                            <td className="text-center">
                                                <button
                                                    type="button"
                                                    className="btn shadow-none"
                                                    onClick={openChatWindow}
                                                >go council</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;