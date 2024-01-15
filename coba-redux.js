import {createStore} from 'redux'

const dataDiri = {
  fullName:"irfan yazid",
  age:20,
  profession:'singer' 
}

const pengubah = (state = dataDiri,action)=>{
  switch (action.type) {
    case "add_age":
      return{
        ...state,
        age:state.age+1
      }
    case "change_name":
      return {
        ...state,
        fullName:action.newName
      }
    case "switch_carrer":
      return {
        ...state,
        profession:action.newProffesion
      }
    default:
      return state
  }
}

const toko = createStore(pengubah)
console.log(toko.getState());

toko.subscribe(()=>{
  console.log("store change",toko.getState());
})

toko.dispatch({
  type:"add_age"
})

toko.dispatch({
  type:"change_name",
  newName:"udin"
})

toko.dispatch({
  type:"switch_carrer",
  newProffesion:"pelawak"
})

console.log(toko.getState());