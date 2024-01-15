// import React from 'react'

import { useSelector,useDispatch } from "react-redux"
import {tambah, hapus,coretin} from "./todoSlice"

export default function TodoListRedux() {

  const menSubmit = (e) =>{
    e.preventDefault()
    let newMember = document.querySelector('#inputMember').value
    console.log(newMember)
    dispatch(tambah(newMember))
    document.querySelector('#inputMember').value = ""
  }


  const mencoret = (e) => {
    console.log(e.target.dataset.time);
    let waktu = e.target.dataset.time
    dispatch(coretin(waktu))
  }

  // const members = ['hanni',"minji","hyein"]
  const members = useSelector((state)=>state.todo.isiArray)
  const dispatch = useDispatch()
  // console.log(members);
  return (
    <div>
      <form>
        <input type="text" id="inputMember" />
        <button onClick={menSubmit} type="submit">click</button>
      </form>
      <ul>
        {members.map((member)=>(
          <div key={member.time}>
            <input type="checkbox" onClick={mencoret} id="mengecekCoret" data-time={member.time} />
            <li style={{textDecoration: member.coret ? 'line-through':'none'}}>{member.nilai} {member.time} {member.coret}</li>
            <button onClick={()=>{dispatch(hapus(member.time))}}>delete</button>
          </div>
        ))}
      </ul>
    </div>
  )
}
