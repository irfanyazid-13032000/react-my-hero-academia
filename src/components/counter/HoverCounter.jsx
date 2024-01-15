const HoverCounter = ({count,incrementCount})=>{
  return (
    <div onMouseOver={incrementCount}>
      Hover {count} times
    </div>
  )
}

export default HoverCounter