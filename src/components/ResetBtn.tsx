

const ResetBtn = ({onClick, label}: {onClick: () => void, label: string}) => {
  return (
    <button onClick={onClick}>{label}</button>
  )
}

export default ResetBtn