import React from 'react';
//import logo, { ReactComponent } from './logo.svg';
import './App.css';

class NameForm extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {btn1: '',
                  btn2: '',
                  p: ''}
    this.handlepchange = this.handlepchange.bind(this);
    this.handleChangebtn1 = this.handleChangebtn1.bind(this);
    this.handleChangebtn2 = this.handleChangebtn2.bind(this);
    this.btnA = this.btnA.bind(this);
    this.btnS = this.btnS.bind(this);
    this.btnD = this.btnD.bind(this);
    this.btnM = this.btnM.bind(this);

  }
  handlepchange(event)
  {
    this.setState({p: event.target.value})
  }

  handleChangebtn1(event)
  {
    this.setState({btn1: event.target.value});
  }

  handleChangebtn2(event)
  {
    this.setState({btn2: event.target.value});
  }

  btnA(event) {
    this.setState({
      p :  + this.state.btn1 + + this.state.btn2
    }) 
    //alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    console.log(this.state.p);
  }
  btnS(event) {
    this.setState({
      p :   this.state.btn1 - this.state.btn2
    }) 
    //alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    console.log(this.state.p);
  }
  btnD(event) {
    this.setState({
      p :   this.state.btn1 / this.state.btn2
    }) 
    //alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    console.log(this.state.p);
  }
  btnM(event) {
    this.setState({
      p :   this.state.btn1 * this.state.btn2
    }) 
    //alert('A name was submitted: ' + this.state.value);
    console.log(this.state.p);
    event.preventDefault();
  }
render() {
  return (
    <div>
    <form onSubmit={this.handleSubmit}>

      Number 1:
      <input type="text" value={this.state.btn1} onChange={this.handleChangebtn1}></input>
    
      Number 2:
      <input type="text" value={this.state.btn2} onChange={this.handleChangebtn2} />

      
      <button onClick={this.btnA}>ADD</button>
      <button onClick={this.btnS}>SUB</button>
      <button onClick={this.btnM}>MUL</button>
      <button onClick={this.btnD}>DIV</button>
      <p id='demo' onChange={this.handlepchange} >{this.state.p}</p>
      </form>
    </div>
  );
}

}


export default NameForm