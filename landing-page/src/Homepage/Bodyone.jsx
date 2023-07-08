import React, { useState } from "react";
import './Bodyone.css'

const Bodyone = ()=>{
    const [mytext, setmytext] = useState("This is My Text");
    const [count, setCount] = useState(0)

    function ChangeText(){
        setmytext("This text is now changed!")
    }

    function increaseCount(){
        setCount(count+1)
    }

    function decreaseCount(){
        if(count > 0){
            setCount(count-1)
        }
    }
    return(
        <div className="body">
            <h2>{count}</h2>
            {/* <h3>{mytext}</h3>
            <h1>Build The Community Your Fans Will Love</h1>
            <p className="text">Huddle re-images the way we build community.
                You have a voice, but so does your audience.
                Create connection with your user as you engage
                in genuine decision.
            </p> */}
            <button onClick={ChangeText}>Get Started For Free</button>

            <button onClick={increaseCount}>+</button>
            <button onClick={decreaseCount}>-</button>
        </div>

    )
}

export default Bodyone;