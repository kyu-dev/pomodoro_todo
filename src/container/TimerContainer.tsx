import { useState, useEffect } from 'react'
import Timer from '../components/Timer'
import StartBtn from '../components/StartBtn'
import ResetBtn from '../components/ResetBtn'

const TimerContainer = () => {
    const [timer, setTimer] = useState(25*60)
    const [isRunning, setIsRunning] = useState(false)
   
    
    const fiveMinutesInSeconds = 5 * 60;

    useEffect(() => {
        let interval: number | undefined;
        
        if (isRunning && timer > 0) {
            interval = setInterval(() => {
                setTimer(prevTimer => prevTimer - 1);
            }, 1000);
        }
        
        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isRunning, timer]);

    const handleReset = () => {
        setTimer(1500)
        setIsRunning(false)
    }

    const handleIncrement = () => {
        if (!isRunning) {
            setTimer(prevTimer => prevTimer + fiveMinutesInSeconds);
        }
    }

    const handleDecrement = () => {
        if (!isRunning) {
            setTimer(prevTimer => {
                if (prevTimer > 0) {
                    return prevTimer - fiveMinutesInSeconds;
                }
                return 0;
            });
        }
    }

    const handleStartStop = () => {
        setIsRunning(!isRunning);
    }

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
    };

    return (
        <div>
            <Timer 
                timer={timer}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                formatTime={formatTime}
            />
            <StartBtn 
                onClick={handleStartStop} 
                label={isRunning ? "Pause" : "Start"} 
            />
            <ResetBtn
                onClick={handleReset}
                label='Reset'
            />
        </div>
    )
}

export default TimerContainer