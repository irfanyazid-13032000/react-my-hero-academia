import { Component } from 'react'
import TodoItem from './TodoItem';

export default class TodoList extends Component {
  render() {
    const { todos,onRemoveTodo} = this.props;
    console.log("dari list :"+ todos);
    return (
      <div>
        {todos.map((todo,index)=>{
          return <TodoItem key={index} todo={todo} onRemoveTodo={onRemoveTodo}/>
        })}
      </div>
    )
  }
}
