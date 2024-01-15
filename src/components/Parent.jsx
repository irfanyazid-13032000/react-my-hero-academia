import  { Component } from 'react'
import Child from "./Child";

export default class Parent extends Component {
  render() {

    return (
      <div>
        <Child name={this.props.name} address={this.props.address} age={this.props.age}/>
      </div>
    )
  }
}
