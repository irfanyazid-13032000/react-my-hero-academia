
import {Nav} from "./components/Nav";
// import {Hero} from "./components/Hero";
// import Parent from "./components/Parent"
// import Statefull from "./components/Statefull"
import Loop from "./components/Loop";
import { Routes,Route,BrowserRouter as Router } from "react-router-dom";
// import Form from "./components/Form";
// import TodoList  from "./components/TodoList";
import { Component } from "react";
import Login from "./components/Login";
import Styling from "./components/hoc/Styling";
import Wrapped from "./components/hoc/WrappedComponent";
import WithCounter from "./components/counter/WithCounter";
import ClickCounter from "./components/counter/ClickCounter";
// import HoverCounter from "./components/counter/HoverCounter";
import TodoListRedux from "./components/redux/TodoListRedux";
import Counter from "./components/redux/Counter";

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      todos:["test","test2"]
    }
  }

  addTodo = (todo) =>{
    this.setState({todos:[...this.state.todos,todo]})
    console.log("test"+this.state.todos);
  }

  removeTodo = (todoToRemove) => {
    this.setState({todos:this.state.todos.filter(todo=>todo!==todoToRemove)})
  }


  render(){
    // console.log(this.state.todos)
    const Haoc = Styling(Wrapped,{backgroundColor:'black',color:'aqua'})
    const KlikCounter = WithCounter(ClickCounter)
    // const DenganCounter = WithCounter(ClickCounter)
  return (
    <>

    <Router>
      <Nav></Nav>
      <Routes>
        <Route index element={<Loop/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/lala" element={<Haoc/>}></Route>
        <Route path="/konter" element={<KlikCounter/>}></Route>
        <Route path="/kounters" element={<Counter/>}></Route>
        <Route path="/reduxtodolist" element={<TodoListRedux/>}></Route>

      </Routes>
    </Router>

{/*   
    <Form onAddTodo={this.addTodo}/>
    <TodoList onRemoveTodo={this.removeTodo} todos={this.state.todos}/> */}
 
    </>
  )

}
}

export default App
