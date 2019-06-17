import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component{
  constructor(props)
  {
    super(props);
    this.state = {
                  class1: 'red',
                  class2: 'green',
                  class3: 'yellow',
                  clr: ['red','green','yellow']
    }
    
    this.btnValidate = this.btnValidate.bind(this);
  }

  btnValidate()
  {
    
    var first = this.state.clr[2];
    for(var i=2 ; i>0 ; i--)
			{
				this.state.clr[i] = this.state.clr[i-1];

      }
      this.state.clr[0] = first;
      this.setState({
      class1: this.state.clr[0], 
      class2: this.state.clr[1],
      class3: this.state.clr[2]

        })
				//document.getElementById(i).style.background = clr[i-1];
				//document.getElementById(i).value = clr[i-1];
			

  }


render()
{
  return(
    <div>
      <button id="1" className={this.state.class1}>RED</button>

      <button id="2" className={this.state.class2}>GREEN</button>

      <button id="3" className={this.state.class3}>YELLOW</button>

      <button onClick={this.btnValidate}>Validate</button>
    </div>
  )
}

}

export default App