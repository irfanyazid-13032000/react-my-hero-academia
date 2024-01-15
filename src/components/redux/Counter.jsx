// import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { decrement,increment } from "./counterSlice";

export default function Counter() {
  const count = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch()


  return (
    <div>
      <div>
        <button onClick={()=>{dispatch(increment())}}>increment</button>
        <h1>{count}</h1>
        <button onClick={()=>dispatch(decrement())}>decrement</button>
      </div>
    </div>
  )


}

