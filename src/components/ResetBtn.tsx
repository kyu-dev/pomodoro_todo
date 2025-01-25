const ResetBtn = ({onClick, label}: {onClick: () => void, label: string}) => {
  return (
    <button onClick={onClick} className="reset">
      <i className="fas fa-rotate"></i>
      {label}
    </button>
  )
}

export default ResetBtn