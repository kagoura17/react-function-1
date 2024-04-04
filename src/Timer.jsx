import React, { useEffect, useState } from 'react';

const Timer = () => {
    const [time, setTime]=useState(0)
    useEffect(() => {
        const intervalId= setInterval(() => {
            setTime((prevTime)=>prevTime+1)
        },1000);
        return()=>{
            clearInterval(intervalId)
        }
    }, []);
    return (
        <div>
            <h1>timer: {time}</h1>
        </div>
    );
};

export default Timer;
