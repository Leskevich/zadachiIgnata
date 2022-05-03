import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        debugger
        const trimed = e.currentTarget.value.trim()
        if (trimed) {
            setName(trimed)// need to fix
            error && setError('')
        } else {
            name && setName('')
            setError('error syk')
        }

    }
    const addUser = () => {
        if (name) {
            alert(`Hello  ! ${name}`) // need to fix
            addUserCallback(name)
            setName('')
        }
    }
    const addUserKeyInter = (e: KeyboardEvent<HTMLButtonElement>) => {
if (e.key==='Enter'){
    addUser()
}
    }

    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            addUserKeyInter={addUserKeyInter}
        />
    )
}

export default GreetingContainer
