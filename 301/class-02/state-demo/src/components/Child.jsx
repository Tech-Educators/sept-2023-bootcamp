import { useState } from 'react'
import cat from '../assets/cat.jpg'

export default function Child({name}) {
    // first is a variable, second is a var to change the value of the variable
    const [likes, setLikes] = useState(0)
    const [mode, setMode] = useState('light')

    // a function that calls setLikes()
    function patsOnBillysHead() {
        setLikes(likes + 1)
    }

    return (
        <>
            <p onClick={setMode('dark')}>Change theme</p>
            <p> {name} is the child 🤓</p>
            <img src={cat} onClick={patsOnBillysHead}/>
            <span> 👋 Pats on {name} 's head {likes}</span>
        </>
    )
}