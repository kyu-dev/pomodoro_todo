import '/src/global.css'

const Timer = ({ 
  timer, 
  onIncrement, 
  onDecrement, 
  formatTime 
}: {
  timer: number,
  onIncrement: () => void,
  onDecrement: () => void,
  formatTime: (time: number) => string
}) => {
  return (
    <div>
        <div className='timer'>
            <button onClick={onDecrement} disabled={timer === 0}>-</button>
            <h1>{formatTime(timer)}</h1>                     
            <button onClick={onIncrement}>+</button>
        </div>
    </div>
  )
}

export default Timer