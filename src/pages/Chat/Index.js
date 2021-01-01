import React, { useState, useEffect } from 'react'
import './style.scss'
import Icon from 'react-icons-kit'
import { ic_near_me, ic_add } from 'react-icons-kit/md'
import { useForm } from 'react-hook-form'
import jwt_decode from 'jwt-decode'
import { useParams } from 'react-router-dom'

import Header from '../../components/Chat/Header/Index'
import LeftMenu from '../../components/Chat/LeftMenu/Index'
import RightMenu from '../../components/Chat/RightMenu/Index'
import ConversationMessages from '../../components/Chat/Messages/Index'

const Index = () => {
    const { register, handleSubmit, errors } = useForm()
    const { reciverId } = useParams()
    const [senderId, setSenderId] = useState(null)
    const [myFiles, setMyFiles] = useState([])
    const [recivedFiles] = useState([1, 2, 3, 4, 5, 6])
    const [messages, setMessages] = useState([])

    useEffect(() => {
        const token = localStorage.getItem("token")
        const user = jwt_decode(token)
        setSenderId(user.id)
    }, [reciverId])

    // Message Submit 
    const onSubmit = async (data, event) => {
        const newMessage = {
            sender: senderId,
            reciver: reciverId,
            message: data.message
        }
        setMessages((exMessage) => [...exMessage, newMessage])

        const newMessage2 = {
            sender: reciverId,
            reciver: senderId,
            message: data.message
        }
        setMessages((exMessage) => [...exMessage, newMessage2])
        event.target.reset()
    }

    // File Upload
    const fileUploadHandle = (event) => {
        const file = event.target.files[0]
        if (file) {
            const fileURL = URL.createObjectURL(file)
            setMyFiles((exFiles) => [...exFiles, fileURL])
        }
    }

    return (
        <div className="chat-room border">
            <Header sender={{ name: 'Sender' }} reciver={{ name: 'Reciver' }} />

            {/* Room Body */}
            <div className="room-body d-lg-flex">

                {/* Left Menu */}
                <div className="left-menu d-none d-lg-block">
                    <LeftMenu files={recivedFiles} />
                </div>

                {/* Message Menu */}
                <div className="flex-fill message-menu">

                    {/* Messages */}
                    <div className="messages">
                        <ConversationMessages
                            sender={senderId}
                            messages={messages}
                        />
                    </div>

                    {/* Message Send Container */}
                    <div className="send-container py-2">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="d-flex">

                                {/* Text input field */}
                                <div className="flex-fill">
                                    <input
                                        type="text"
                                        name="message"
                                        placeholder="Write message"
                                        className={errors.message ? "form-control shadow-none error-border" : "form-control shadow-none"}
                                        ref={register({ required: true })}
                                    />
                                </div>

                                {/* Message Submit */}
                                <div className="ml-auto px-2">
                                    <button
                                        type="submit"
                                        className="btn rounded-circle shadow-none"
                                    >
                                        <Icon icon={ic_near_me} size={25} style={{ color: '#007cfa' }} />
                                    </button>
                                </div>

                                {/* File Upload */}
                                <div className="file-upload">
                                    <input
                                        type="file"
                                        className="upload"
                                        onChange={fileUploadHandle}
                                    // accept=".pdf"
                                    />
                                    <button
                                        type="button"
                                        className="btn rounded-circle shadow-none"
                                    >
                                        <Icon icon={ic_add} size={25} style={{ color: '#eeeee' }} />
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Right Menu */}
                <div className="right-menu d-none d-lg-block">
                    <RightMenu files={myFiles} />
                </div>
            </div>
        </div>
    );
}

export default Index;