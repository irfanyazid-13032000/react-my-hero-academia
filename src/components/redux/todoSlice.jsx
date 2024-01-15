import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isiArray:[]
}

export const todoSlice = createSlice({
  name:"todo",
  initialState,
  reducers:{
    tambah:(state,action)=>{
      state.isiArray.push({nilai:action.payload,time:Date.now(),coret:false})
    },
    hapus:(state,action)=>{
      state.isiArray = state.isiArray.filter((isi)=>isi.time !== action.payload)
    },
    coretin:(state,action)=>{
      state.isiArray = state.isiArray.map((isi)=>{
        return isi.time == action.payload ? {...isi,coret: !isi.coret} : isi
      })
    }
  }
})

export const {tambah,hapus,coretin} = todoSlice.actions
export default todoSlice.reducer