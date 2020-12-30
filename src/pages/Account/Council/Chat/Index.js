import React from 'react'
import './style.scss'

import Header from '../../../../components/Chat/Header/Index'
import LeftMenu from '../../../../components/Chat/LeftMenu/Index'
import RightMenu from '../../../../components/Chat/RightMenu/Index'

const Index = () => {

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
                        <h4>message</h4>
                        <h4>message last</h4>
                    </div>

                    {/* Message Send Container */}
                    <div className="send-container py-2">
                        <form>
                            <input
                                type="text"
                                className="form-control shadow-none"
                                placeholder="Write message"
                            />
                        </form>
                    </div>
                </div>

                {/* Right Menu */}
                <div className="right-menu d-none d-lg-block">
                    <RightMenu />
                </div>
            </div>
        </div>
    );
}

export default Index;