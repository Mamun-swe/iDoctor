import React, { useState } from 'react'
import axios from 'axios'
import { apiURL } from '../../../../utils/apiURL'
import { useHistory } from 'react-router-dom'

const Index = () => {
    const history = useHistory()
    const [isLoading, setLoading] = useState(false)

    const header = {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") }
    }

    // Logout
    const doLogout = async () => {
        try {
            setLoading(true)
            const response = await axios.get(`${apiURL}auth/logout`, header)
            if (response.status === 200) {
                localStorage.clear()
                history.push('/')
            }
        } catch (error) {
            if (error)
                console.log(error.response)
        }
    }

    return (
        <div>
            <h1>User Index</h1>

            <button
                type="button"
                className="btn btn-danger"
                onClick={doLogout}
                disabled={isLoading}
            >
                {isLoading ? <span>Logging out...</span> : <span>Logout</span>}
            </button>
        </div>
    );
};

export default Index;