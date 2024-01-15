import { Component } from 'react'

export default class Child extends Component {

  constructor(props){
    super(props)
    this.state = {
      nama:"newjeans",
      member:"hanni"
    }

  }

  gantiGroup = () => {
    if (this.state.nama === "newjeans") {
      this.setState({nama:"le sserafim",member:"chaewon"})
    }else{
      this.setState({nama:"newjeans",member:"hanni"})
    }
    
  }

  render() {
    
    return (
      <>      
    <div className="jumbotron jumbotron-fluid">
    <div className="container">
    <h1 className="display-4">member {this.state.nama} tercantik</h1>
    <p className="lead">halo saya {this.state.member}, saya tinggal di {this.props.address}, dan saya berusia {this.props.age} tahun</p>
    <button className='btn btn-success' onClick={this.gantiGroup}>ganti girlband</button>
  </div>
</div>
      </>
    )
  }
}
