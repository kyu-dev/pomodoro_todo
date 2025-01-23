import { useState } from "react"
import UserInput from "../components/UserInput"
import SubmitBtn from "../components/SubmitBtn"
import TodoDisplayer from "../components/TodoDisplayer"

const TodoContainer = () => {
  const [userInput, setUserInput] = useState("")    
  const [todos, setTodos] = useState<string[]>([])  // tableau de todos 

  const handleInputChange = (prevUserInput: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(prevUserInput.target.value) // gere le changement de l'userInput 
  }

  const handleSubmit = () => {
    if (userInput.trim()) {
      setTodos([...todos, userInput]) // ajoute la todo à la fin du tableau
      setUserInput("")
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit()                        // gere le submit avec la touche enter
    }
  }



  const handleDelete = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index)) // supprime la todo à l'index donné
  }

  return (
    <div className="todo-container">
        <div className="todo-input-container">
            <UserInput
                value={userInput}                                   
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
            />
            <SubmitBtn onClick={handleSubmit} />
        </div>
        <TodoDisplayer todos={todos} onDelete={handleDelete} />
    </div>
  )
}

export default TodoContainer