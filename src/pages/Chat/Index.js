import React, { useState } from 'react'
import './style.scss'
import Icon from 'react-icons-kit'
import { ic_near_me, ic_add } from 'react-icons-kit/md'
import { useForm } from 'react-hook-form'

import Header from '../../components/Chat/Header/Index'
import LeftMenu from '../../components/Chat/LeftMenu/Index'
import RightMenu from '../../components/Chat/RightMenu/Index'

const Index = () => {
    const { register, handleSubmit, errors } = useForm()
    const [myFiles, setMyFiles] = useState([])

    // Mesage Submit 
    const onSubmit = async (data) => {
        console.log(data)
    }

    // File Upload handle
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
                    <LeftMenu />
                </div>

                {/* Message Menu */}
                <div className="flex-fill message-menu">

                    {/* Messages */}
                    <div className="messages">
                        <h4>message 1</h4>
                        <h4>message</h4>
                        <h4>message</h4>
                        <h4>message</h4>
                        <h4>message</h4>
                        <h4>message</h4>
                        <h4>message</h4>
                        <h4>message</h4>
                        <h4>message</h4>
                        <h4>message</h4>
                        <h4>message</h4>
                        <h4>message</h4>
                        <h4>message</h4>
                        <h4>message</h4>
                        <h4>message</h4>
                        <h4>message</h4>
                        <h4>message</h4>
                        <h4>message</h4>
                        <h4>message</h4>
                        <h4>message</h4>
                        <h4>message</h4>
                        <h4>message</h4>
                        <h4>message</h4>
                        <h4>message</h4>
                        <h4>message</h4>
                        <h4>message</h4>
                        <h4>message</h4>
                        <h4>message</h4>
                        <h4>message</h4>
                        <h4>message</h4>
                        <h4>message</h4>
                        <h4>message</h4>
                        <h4>message</h4>
                        <h4>message last</h4>
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