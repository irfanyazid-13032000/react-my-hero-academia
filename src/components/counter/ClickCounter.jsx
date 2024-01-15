const ClickCounter = ({count, incrementCount}) => {
  return (
    <button onClick={incrementCount}>
      clicked {count} times
    </button>
  )
}

export default ClickCounter