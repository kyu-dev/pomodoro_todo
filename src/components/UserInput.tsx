interface UserInputProps {
  value: string;                                                        // typage pour ts
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const UserInput = ({ value, onChange, onKeyDown }: UserInputProps) => {
  return (
    <input
      type="text"
      value={value}         
      onChange={onChange}
      onKeyDown={onKeyDown}
      className="todo-input"
      placeholder="Ajouter une tâche..."
    />
  )
}

export default UserInput