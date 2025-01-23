const SubmitBtn = ({onClick}: {onClick: () => void}) => {
  return (
    <button onClick={onClick} className="submit-btn">
      Ajouter
    </button>
  )
}

export default SubmitBtn