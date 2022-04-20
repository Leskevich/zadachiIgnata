import React from 'react'

type messageType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}

function Message({avatar,name,message,time}:messageType) {
    return (
        <div>
            <div>
                <img src={avatar}/>
            </div>
            <div>
                <div>{name}</div>
                <div>{message}</div>
                <div>{time}</div>
            </div>
        </div>
    )
}

export default Message
