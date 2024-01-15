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
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-lg-9 col-xl-7">
        <div className="card rounded-3">
          <div className="card-body p-4">

            <h4 className="text-center my-3 pb-3">Aplikasi yang harus dilakukan</h4>

            <form className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
              <div className="col-12">
                <div className="form-outline">
                  <input type="text" id="inputMember" className="form-control" />
                </div>
              </div>

              <div className="col-12">
                <button type="submit" className="btn btn-primary" onClick={menSubmit}>Save</button>
              </div>

            </form>

            <table className="table mb-4">
              <thead>
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Todo item</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {members.map((member)=>(
                  <tr key={member.time}>
                    <th scope="row">{member.time}</th>
                    <td style={{textDecoration: member.coret ? 'line-through':'none'}}>{member.nilai}</td>
                    <td>
                      <button type="submit" className="btn btn-danger" onClick={()=>{dispatch(hapus(member.time))}}>Delete</button>
                      <input type="checkbox" className="form-check-input ms-4 mt-2" onClick={mencoret} id="mengecekCoret" data-time={member.time}/>
                    </td>
                  </tr>
                

                ))}
                
              </tbody>
            </table>

          </div>
        </div>
      </div>
    </div>
  </div>

      
    </div>
  )
}
