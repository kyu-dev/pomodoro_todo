const StartBtn = ({onClick, label}: {onClick: () => void, label: string}) => {
  return (
    <button onClick={onClick}>
      <i className={`fas ${label === "Start" ? "fa-play" : "fa-pause"}`}></i>
      {label}
    </button>
  )
}

export default StartBtn