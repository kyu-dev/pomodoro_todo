interface TodoDisplayerProps {
  todos: string[];
  onDelete: (index: number) => void;
}

const TodoDisplayer = ({ todos, onDelete }: TodoDisplayerProps) => {
  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <div key={index} className="todo-item">
          <span>{todo}</span>
          <button onClick={() => onDelete(index)}>Supprimer</button>
        </div>
      ))}
    </div>
  )
}

export default TodoDisplayer