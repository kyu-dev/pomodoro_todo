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
            <button onClick={onDecrement} disabled={timer === 0}>
              <i className="fas fa-minus"></i>
            </button>
            <h1>{formatTime(timer)}</h1>                     
            <button onClick={onIncrement}>
              <i className="fas fa-plus"></i>
            </button>
        </div>
    </div>
  )
}

export default Timer