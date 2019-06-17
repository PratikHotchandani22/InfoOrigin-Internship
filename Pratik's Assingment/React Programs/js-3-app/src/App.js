import React from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state ={val1: '',
                 val2: '',
                 val3: '',
                 class1: '',
                 class2: '',
                class3: ''}
    
    this.handleChangeVal1 = this.handleChangeVal1.bind(this);
    this.handleChangeVal2 = this.handleChangeVal2.bind(this);
    this.handleChangeVal3 = this.handleChangeVal3.bind(this);
    this.btnValidate = this.btnValidate.bind(this);

  }
  handleChangeVal1(event)
  {
    this.setState({val1: event.target.value});
  }

  handleChangeVal2(event)
  {
    this.setState({val2: event.target.value});
  }
  
  handleChangeVal3(event)
  {
    this.setState({val3: event.target.value});
  }
  isInteger(props) {
    return Math.round(props) === props;
}


  btnValidate(event)
  {
    const a = parseInt(this.state.val1);
    const b = parseInt(this.state.val2);
    const c = parseInt(this.state.val3);
    console.log(this.isInteger(a));
    console.log("value of a: " + a + " Value of b: " + b + " value of c: " + c )
    if(a<b && b%a === 0)
    {
      console.log("value of b%a is: " + b%a + "true");
      this.setState({
        class1 : "right"
      })
      //document.getElementById("min").style.border= "2px inset";
    }
    else
		{
      console.log("value of b%a is: " + b%a + " false");
      this.setState({
        class1 : "wrong"
      })
      //document.getElementById("min").style.border= "thick solid red";
    }
    if(c<b && b%c === 0 && c<=a)
		{
      console.log("value of b%c is: " + b%c  + "true");
      this.setState({
        class3 : "right"
      })
      //document.getElementById("mul").style.border= "2px inset";
		}
		else
		{
      console.log("value of b%c is: " + b%c + " false");
      this.setState({
        class3 : "wrong"
      })
      //document.getElementById("mul").style.border= "thick solid red";
    }
  /*  
   const x = 2;
   const y = 10;
   const z = 2;
    console.log(x<y);
    console.log(z<y);
*/
  }

  render()
  {
    return(
      <div>
        Min:
        <input type="text" value={this.state.val1} onChange={this.handleChangeVal1} className={this.state.class1} ></input>
        <br></br>
        Max:
        <input type="text" value={this.state.val2} onChange={this.handleChangeVal2} className={this.state.class2}></input>
        <br></br>
        Mul:
        <input type="text" value={this.state.val3} onChange={this.handleChangeVal3} className={this.state.class3}></input>
        <br></br>
        <button onClick={this.btnValidate}>Validate</button>
      </div>
    )
  }





}


export default App;
