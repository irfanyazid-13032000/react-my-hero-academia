import { Component } from 'react'

export default class Form extends Component {

  constructor(props){
    super(props)
    this.state = {
      text:""
    }
  }



  onKetik = (key) => {
    this.setState({text:key.target.value})
    // console.log(this.state.text);
  }

 ngesubmit = (e) => {
  e.preventDefault()
  if (this.state.text) {
    this.props.onAddTodo(this.state.text)
    this.setState({text:""})
  }
 }


  render() {
   
    return (
      <div>
        <form onSubmit={this.ngesubmit}>
          <label htmlFor="">name</label>
          <input type="text" value={this.state.text} onChange={this.onKetik} />
          <button type="submit">submit</button>
        </form>
        <ul>
        </ul>
      </div>
    )
  }
}
