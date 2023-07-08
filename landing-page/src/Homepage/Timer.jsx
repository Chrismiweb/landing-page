import React, { useEffect, useState } from "react";

const Timer=()=>{
    const[timer, setTimer] = useState(0);

    function countTime(){
        setTimeout(()=>{
            if(timer < 5){
                setTimer(timer+1)
            }
        },1000)
    }
    useEffect(()=>{
        countTime()
    })
    return(
        <div>
            <h1>{timer}</h1>
        </div>
    )    
}
export default Timer