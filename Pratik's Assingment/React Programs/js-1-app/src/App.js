import React from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(props)
  {
    super(props);
    this.state =
    {
      idbtn1: "id1",
      idbtn2: "id2",
      idbtn3: "id3"
    }

    this.redbtn = this.redbtn.bind(this);

    this.greenbtn = this.greenbtn.bind(this);

    this.yellowbtn = this.yellowbtn.bind(this);
  }
  redbtn()
  {
    this.setState({
      idbtn1 : "Btnred"
    })
  }
  greenbtn()
  { 
    this.setState({
      idbtn2: "Btngreen"
    })
  }
  yellowbtn()
  {
    this.setState({
      idbtn3: "Btnyellow"
    })
  }
  

  render()
  {
    return(
      <div>
        <button onClick={this.redbtn} id={this.state.idbtn1}>Red</button>
        <button onClick={this.greenbtn} id={this.state.idbtn2}>Green</button>
        <button onClick={this.yellowbtn} id={this.state.idbtn3}>Yellow</button>
      </div>
    )
  }
  
}

export default App;
