import { Component } from 'react';

export default class Loop extends Component {
  constructor(props){
    super(props)
    this.state = {
      selectedIndex : 0
    }
  }

  selectedGirlBand = (index) =>{
    this.setState({selectedIndex:index})
  }

  render() {
    
    const girlbands = ["newjeans", "le sserafim", "ive", "twice"];
    return (
      <div>
        <ul className="list-group">
          {girlbands.map((girlband,index)=>(
            <li key={girlband} className={this.state.selectedIndex === index ? "list-group-item active" : "list-group-item"}>{girlband}</li>
          ))}
        </ul>
      </div>
    );
  }
}
