function CountButton({ handleClick, text }) {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

export default CountButton;

