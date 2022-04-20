import React from 'react'
import s from './Message.module.css'

type messageType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}

function Message({avatar,name,message,time}:messageType) {
    return (
        <div className={s.message}>
            <div>
                <img src={avatar} alt={'avatar'} className={s.avatar}/>
            </div>
            <div className={s.angle}></div>
            <div className={s.content}>
                <div className={s.name}>{name}</div>
                <div className={s.message}>{message}</div>
                <div className={s.times}>{time}</div>
            </div>
        </div>
    )
}

export default Message
