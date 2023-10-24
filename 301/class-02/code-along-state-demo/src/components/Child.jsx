import cat from '../assets/cat.jpg'
import {useState} from 'react'

// when we want to use useState, we have to import it with {}'s
export default function Child({name}) {

    // use state is just a function 
    // as an argument, it takes an intial value for a 
    // 'state' variable
    console.log(useState(0))

    const [likes, setLikes] = useState(0)

    function handleLikes() {
        setLikes(likes + 1)
    }
    return (
        <div>
            <p>{name} is the child</p> 
            <img src={cat} onClick={handleLikes}/>
            <span>❤️ {likes}</span>
        </div>
    )
}
