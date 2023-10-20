import React, { useState } from "react";

const SetTimer = () => {

    const[timer,setTimer] = useState(15);
    return(
        <div className="timer">

            <p>{timer}</p>

            <div className="timer-btn">
                <button onClick={() => setTimer(15)}>15s</button>
                <button onClick={() => setTimer(30)}>30s</button>
                <button onClick={() => setTimer(60)}>60s</button>
            </div>
        </div>
    )
}

export default SetTimer;