import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state=
    {
      a1: false,
      a2: false,
      a3: false,
      val1: 0,
      val2: 0,
      val3: 0,
      c1: 0,
      c2: 0,
      c3: 0,
      temp: 0
    }
    this.inc1 = this.inc1.bind(this);
    this.inc2 = this.inc2.bind(this);
    this.inc3 = this.inc3.bind(this);
    this.Validate = this.Validate.bind(this);
  }

  inc1()
  {
    this.setState({
      a1: true,
      val1: this.state.val1 + 1,
      temp: this.state.temp + 1,
      c1: this.state.temp
    })
  }

  inc2()
  {
    this.setState({
      a2: true,
      val2: this.state.val2 + 1,
      temp: this.state.temp + 1,
      c2: this.state.temp
    })
  }
  
  inc3()
  {
    this.setState({
      a3: true,
      val3: this.state.val3 + 1,
      temp: this.state.temp + 1,
      c3: this.state.temp
    })
  }

  Validate()
  {
    if(this.state.temp === 0)
    {
      this.setState({
        val1: this.state.val1 + 1,
        val2: this.state.val2 + 1,
        val3: this.state.val3 + 1
      })
    }
    else
    {
      if(this.state.a1 === false || this.state.a2 === false || this.state.a3 === false)
      {
        if(this.state.a1 === false)
        {
          this.setState({
            c1: this.state.temp,
            val1: this.state.val1 + 1
          })
        }
        if(this.state.a2 === false)
        {
          this.setState({
            c2: this.state.temp,
            val2: this.state.val2 + 1
          })
        }
        if(this.state.a3 === false)
        {
          this.setState({
            c3: this.state.temp,
            val3: this.state.val3 + 1
          })
        }

      }
      else{
        if(this.state.a1 === true && this.state.a2 === true && this.state.a3 === true)
        {
          if(this.state.c1<this.state.c2 && this.state.c1<this.state.c3)
          {
            this.setState({
              val1: this.state.val1 + 1
            })
          }
          else if(this.state.c2<this.state.c1 && this.state.c2<this.state.c3)
          {
            this.setState({
              val2: this.state.val2+ 1
            })
          }
          else
          {
            this.setState({
              val3: this.state.val3 + 1
            })
          }
        }
      }
    }
  }

  render()
  {
    return(
      <div>
      <button onClick={this.inc1}>{this.state.val1}</button>
      <br></br>
      <button onClick={this.inc2}>{this.state.val2}</button>
      <br></br>
      <button onClick={this.inc3}>{this.state.val3}</button>
      <br></br>
      <button onClick={this.Validate}>Validate</button>
      </div>
    )
  }
}
export default App;
