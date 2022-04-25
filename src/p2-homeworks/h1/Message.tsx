import React, {ChangeEvent, useState} from 'react'
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



function Notes() {
    const [newNote, setNewNote] = useState<string>("")
    const [notes, setNotes] = useState<Array<string>>([])
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement> )=>
        setNewNote(e.currentTarget.value)
    const addNote = () => {
        setNotes([newNote, ...notes])
        setNewNote("")
    }
    return (
        <div>
            <textarea
                value={newNote}
                onChange={onChangeHandler}
                onBlur={addNote}
            />
            <div>
                <button

                    // onClick={setNotes([])}
                >Clear notes list</button>
            </div>
            <h4>Notes:</h4>
            <div>
                {notes.map(n => <p>{n}</p>)}
            </div>
        </div>
    )
}

