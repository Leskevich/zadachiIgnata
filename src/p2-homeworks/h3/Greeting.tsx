import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    addUserKeyInter: (e: KeyboardEvent<HTMLButtonElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, addUserKeyInter} // деструктуризация пропсов
) => {
    const inputClass = error ? s.errorInput : s.input // need to fix with (?:)

    return (
        <div className={s.greeting}>
            <div>
                <input
                    onBlur={setNameCallback}
                    value={name}
                    onChange={setNameCallback}
                    className={inputClass}
                />
                <div className={s.error}>{error}</div>
            </div>
            <button
                className={s.button}
                onKeyDown={addUserKeyInter}
                onClick={addUser}
                disabled={!name}
            >add
            </button>
            <div className={s.count}>{totalUsers}</div>

        </div>
    )
}

export default Greeting
