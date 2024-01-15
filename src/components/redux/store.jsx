import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice'
import  todoSliceReducer  from "./todoSlice";

export const store = configureStore({
  reducer:{
    counter:counterReducer,
    todo:todoSliceReducer
  }
})