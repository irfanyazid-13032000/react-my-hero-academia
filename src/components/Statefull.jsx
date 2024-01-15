import { Component } from 'react'

export default class Statefull extends Component {
  constructor(props){
    super(props)
    this.state = {nama:"adam"}
    this.state = {show:true}
    console.log("ini adalah console log adam");
  }

  hapus = () => {
    this.setState({show:false})
  }

  static getDerivedStateFromProps(){
    console.log("ini adalah getDeriverdState");
  }


  componentDidMount(){
    setTimeout(() => {
      console.log("set timeout componentdidmount");
      this.setState({nama:"yazid"})
    }, 2000);
  }

  render() {
    let myHeader
    if (this.state.show) {
      myHeader = <Anak></Anak>
    }else{
      myHeader = "loh dihapus cokkkk"
    }
    console.log("ini adalah render");
    return (
      <div>
        {myHeader}
        <h1>haduh apalagi {this.state.nama}</h1>
        <button className="btn btn-success" onClick={this.hapus}>halooo</button>
      </div>
    )
  }
}



export class Anak extends Component {
  componentWillUnmount = () => {
    console.log("componentWillUnmount sedang dijalankan");
  }


  render() {
    return (
      <div>
        <div>ini adalah anak</div>
      
      </div>
    )
  }
}

