import { useState } from 'react'

const TimerContainer = () => {
    

    const [timer, setTimer] = useState(25*60)    // initialise le timer à 25 minutes

    const fiveMinutesInSeconds = 5 * 60; // vatiable pour convertir 5 minutes en secondes


    const handleIncrement = () =>{
        setTimer((prevTimer) => { 
            return prevTimer + fiveMinutesInSeconds;    // ajoute 5 minutes au timer
        })
    }

    const handleDecrement = () =>{
        setTimer((prevTimer) =>{
            if(prevTimer > 0){
                return prevTimer - fiveMinutesInSeconds    // soustrait 5 minutes au timer
            }
            return 0 // empêche le timer d'aller en dessous de 0
            
        })
    }

    const formatTime = (seconds:number) => {
      const minutes = Math.floor(seconds / 60);  // convertie les secondes en minutes
      const remainingSeconds = seconds % 60;    // calcule le reste des secondes grace au modulo
      return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`; // formate le temps en mm:ss
    };


  return (
    <div>
        <div>
            <button onClick={handleDecrement} disabled={timer === 0  } >    -   </button>
            <h1>{formatTime(timer)}</h1>                     
            <button onClick={handleIncrement}>    +   </button>
        </div>
    </div>
  )
}

export default TimerContainer