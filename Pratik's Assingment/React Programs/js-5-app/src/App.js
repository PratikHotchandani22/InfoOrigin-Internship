import React from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      demopos: 0,
      demoran: 0,
      random1: 0,
      random2: 0,
      won1: false,
      won2: false,
      btn1: false,
      btn2: false,
      pos1: 0,
      pos2: 0,
      class1un: 'uncoloured',
      class1col: 'coloured',
      class2un: 'uncoloured',
      class2col: 'coloured',
      id1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
      id2: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
    }
    this.proc1 = this.proc1.bind(this);
    this.proc2 = this.proc2.bind(this);
  }

  proc1() {


    if (this.state.won1 === false) {
      this.setState({
        random1: Math.floor((Math.random() * 6) + 1),
        pos1: this.state.random1 + this.state.pos1,
        btn1: true,
        btn2: false,
        demoran: this.state.random1

      })
    }

    else { }

  }

  proc2() {
    if (this.state.won2 === false) {
      this.setState({
        random2: Math.floor((Math.random() * 6) + 1),
        pos2: this.state.random2 + this.state.pos2,
        btn1: false,
        btn2: true,
        demoran: this.state.random2
      })
    }

  }



  render() {

    //pos1 less than 25
    if (this.state.pos1 < 25) {

      if (this.state.pos1 === 3 || this.state.pos1 === 5 || this.state.pos1 === 9 || this.state.pos1 === 13) {
        //for uncolouring initial position
        var org1 = this.state.pos1;
        org1 = org1 - this.state.random1;
        console.log("orignal val1 is: " + org1);
        for (var k = 0; k < org1; k++) {
          if ('coloured' === this.state.id1[k]) {
            console.log("value of k is: " + k)
            this.state.id1[k] = org1;
          }
        }

        this.setState({
          pos1: 0
        })
        alert("SNAKEEEE BITTTTTEEE, go back to start");
      }
      else {
        //for colouring player1
        for (var i = 0; i < 25; i++) {
          if (this.state.pos1 === this.state.id1[i]) {
            this.state.id1[i] = "coloured";
            break;
          }
        }

        //for uncolouring initial postion
        var org1 = this.state.pos1;
        org1 = org1 - this.state.random1;
        console.log("orignal val1 is: " + org1);
        for (var k = 0; k < org1; k++) {
          if ('coloured' === this.state.id1[k]) {
            console.log("value of k is: " + k)
            this.state.id1[k] = org1;
          }
        }
      }




    }

    //pos1 equal to 25
    if (this.state.pos1 === 25) {
      this.state.id1[24] = "coloured";
      //for uncolouring initial postion
      var org1 = this.state.pos1;
      org1 = org1 - this.state.random1;
      console.log("orignal val1 is: " + org1);
      for (var k = 0; k < org1; k++) {
        if ('coloured' === this.state.id1[k]) {
          console.log("value of k is: " + k)
          this.state.id1[k] = org1;
        }
      }

      this.setState({

        btn2: true,
        won1: true,
        pos1: 0,
        pos2: 0
      })

      alert("Player one won");

    }

    //pos1 greater than 25
    if (this.state.pos1 > 25) {

      this.setState({
        pos1: this.state.pos1 - this.state.random1
      })
    }


    //pos2 less than 25
    if (this.state.pos2 < 25) {
      if (this.state.pos2 === 3 || this.state.pos2 === 5 || this.state.pos2 === 9 || this.state.pos2 === 13) {
        //for uncolouring initial position
        var org2 = this.state.pos2;
        org2 = org2 - this.state.random2;
        console.log("orignal val2 is: " + org2);
        for (var l = 0; l < org2; l++) {
          if ('coloured' === this.state.id2[l]) {
            console.log("value of l is: " + l)
            this.state.id2[l] = org2;
          }
        }

        this.setState({
          pos2: 0
        })
        alert("SNAKEEEE BITTTTTEEE, go back to start");
      }

      else {
        //for colouring player2    
        for (var j = 0; j < 25; j++) {
          if (this.state.pos2 === this.state.id2[j]) {
            this.state.id2[j] = "coloured";
          }
        }
        //for uncolouring initial position
        var org2 = this.state.pos2;
        org2 = org2 - this.state.random2;
        console.log("orignal val2 is: " + org2);
        for (var l = 0; l < org2; l++) {
          if ('coloured' === this.state.id2[l]) {
            console.log("value of l is: " + l)
            this.state.id2[l] = org2;
          }
        }
      }

    }

    //pos2 equal to 25
    if (this.state.pos2 === 25) {
      var org2 = this.state.pos2;
      org2 = org2 - this.state.random2;
      console.log("orignal val2 is: " + org2);
      for (var l = 0; l < org2; l++) {
        if ('coloured' === this.state.id2[l]) {
          console.log("value of l is: " + l)
          this.state.id2[l] = org2;
        }
      }
      this.state.id2[24] = "coloured";

      this.setState({
        btn1: true,
        won2: true,
        pos1: 0,
        pos2: 0
      })


      alert("Player two won");

    }

    //pos2 greater than 25
    if (this.state.pos2 > 25) {
      this.setState({
        pos2: this.state.pos2 - this.state.random2
      })
    }



    console.log("-->", this.state.pos1);
    return (
      <div className="App">
        <div id="btn1">
          <button name="btn1" value="player1" id="btn1" onClick={this.proc1} disabled={this.state.btn1}>Player1</button>
          <table id="p1">

            <tr>
              <td id={this.state.id1[0]} className={this.state.class1un}>1</td>
              <td id={this.state.id1[1]} className={this.state.class1un}>2</td>
              <td id={this.state.id1[2]} className={this.state.class1un}><img src={require('./snake.jpeg')}></img>3</td>
              <td id={this.state.id1[3]} className={this.state.class1un}>4</td>
              <td id={this.state.id1[4]} className={this.state.class1un}><img src={require('./snake.jpeg')}></img>5</td>
            </tr>

            <tr><td id={this.state.id1[5]} className={this.state.class1un}>6</td>
              <td id={this.state.id1[6]} className={this.state.class1un}>7</td>
              <td id={this.state.id1[7]} className={this.state.class1un}>8</td>
              <td id={this.state.id1[8]} className={this.state.class1un}><img src={require('./snake.jpeg')}></img>9</td>
              <td id={this.state.id1[9]} className={this.state.class1un}>10</td>
            </tr>

            <tr><td id={this.state.id1[10]} className={this.state.class1un}>11</td>
              <td id={this.state.id1[11]} className={this.state.class1un}>12</td>
              <td id={this.state.id1[12]} className={this.state.class1un}><img src={require('./snake.jpeg')}></img>13</td>
              <td id={this.state.id1[13]} className={this.state.class1un}>14</td>
              <td id={this.state.id1[14]} className={this.state.class1un}>15</td>
            </tr>

            <tr>
              <td id={this.state.id1[15]} className={this.state.class1un}>16</td>
              <td id={this.state.id1[16]} className={this.state.class1un}>17</td>
              <td id={this.state.id1[17]} className={this.state.class1un}>18</td>
              <td id={this.state.id1[18]} className={this.state.class1un}>19</td>
              <td id={this.state.id1[19]} className={this.state.class1un}>20</td>
            </tr>
            <tr>
              <td id={this.state.id1[20]} className={this.state.class1un}>21</td>
              <td id={this.state.id1[21]} className={this.state.class1un}>22</td>
              <td id={this.state.id1[22]} className={this.state.class1un}>23</td>
              <td id={this.state.id1[23]} className={this.state.class1un}>24</td>
              <td id={this.state.id1[24]} className={this.state.class1un}>25</td>
            </tr>
          </table>
        </div>

        <div id="div2">

          <button name="btn2" value="player2" id="btn2" onClick={this.proc2} disabled={this.state.btn2}>Player 2</button>
          <table id="p1">

            <tr>
              <td id={this.state.id2[0]} className={this.state.class2un}>1</td>
              <td id={this.state.id2[1]} className={this.state.class2un}>2</td>
              <td id={this.state.id2[2]} className={this.state.class2un}><img src={require('./snake.jpeg')}></img>3</td>
              <td id={this.state.id2[3]} className={this.state.class2un}>4</td>
              <td id={this.state.id2[4]} className={this.state.class2un}><img src={require('./snake.jpeg')}></img>5</td>
            </tr>
            <tr>
              <td id={this.state.id2[5]} className={this.state.class2un}>6</td>
              <td id={this.state.id2[6]} className={this.state.class2un}>7</td>
              <td id={this.state.id2[7]} className={this.state.class2un}>8</td>
              <td id={this.state.id2[8]} className={this.state.class2un}><img src={require('./snake.jpeg')}></img>9</td>
              <td id={this.state.id2[9]} className={this.state.class2un}>10</td>
            </tr>
            <tr>
              <td id={this.state.id2[10]} className={this.state.class2un}>11</td>
              <td id={this.state.id2[11]} className={this.state.class2un}>12</td>
              <td id={this.state.id2[12]} className={this.state.class2un}><img src={require('./snake.jpeg')}></img>13</td>
              <td id={this.state.id2[13]} className={this.state.class2un}>14</td>
              <td id={this.state.id2[14]} className={this.state.class2un}>15</td>
            </tr>
            <tr>
              <td id={this.state.id2[15]} className={this.state.class2un}>16</td>
              <td id={this.state.id2[16]} className={this.state.class2un}>17</td>
              <td id={this.state.id2[17]} className={this.state.class2un}>18</td>
              <td id={this.state.id2[18]} className={this.state.class2un}>19</td>
              <td id={this.state.id2[19]} className={this.state.class2un}>20</td>
            </tr>
            <tr>
              <td id={this.state.id2[20]} className={this.state.class2un}>21</td>
              <td id={this.state.id2[21]} className={this.state.class2un}>22</td>
              <td id={this.state.id2[22]} className={this.state.class2un}>23</td>
              <td id={this.state.id2[23]} className={this.state.class2un}>24</td>
              <td id={this.state.id2[24]} className={this.state.class2un}>25</td>
            </tr>
          </table>
        </div>
        <div>
          <p id="demoran">Dice: {this.state.demoran}</p>
          <p id="demopos"></p>
        </div>
      </div>
    )
  }

}

export default App;
