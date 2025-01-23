import TimerContainer from './container/TimerContainer'
import TodoContainer from './container/TodoContainer'

const App = () => {
  return (
    <div className='app-container'>
      <div className="timer-section">
        <TimerContainer />
      </div>
      <div className="todo-section">
        <TodoContainer />
      </div>
    </div>
  )
}

export default App