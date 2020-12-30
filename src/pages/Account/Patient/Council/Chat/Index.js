import React from 'react'
import './style.scss'

const Index = ({user}) => {


    return (
        <div className="chat-room border">
            <h1>{user.name}</h1>

        </div>
    );
}

export default Index;