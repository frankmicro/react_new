import React,{ Component } from "react";
//import logo from './logo.svg';
import './App.css';
import Person from "./Person/Person";
import Product from "./Products/Products";
import Radium, { StyleRoot } from 'radium'; 

class App extends Component {
  state = {
    persons: [
      {
        name:'Rohan',
        age:28
      },
      {
        name:'Parkar',
        age:29
      }
    ],
    flag:false
  }

  switchNameHandler = () => {
    //this.state.persons[0].name = 'ronnie';  Dont do this
    this.setState({
      persons:[
      {
        name : 'ronnie',
        age : 26
      },
      {
        name : 'belboa',
        age : 26
      },
    ],
    flag:!this.state.flag
  }) //comes from component
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons:[
        {name:event.target.value, age:28},
        {
          name : 'belboa',
          age : 26
        },
      ]
    });
  }

  render() {
    const style = {
      backgroundColor: 'green',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer',
      ':hover':{
        backgroundColor:'lightGreen',
        color:'black'
      }
    };

    let application = null;

    if (this.state.flag) {
      style[':hover'] = {
        backgroundColor:'lightred',
        color:'black'
      }
      style.backgroundColor = 'red';
      application = (
        <p>Hello</p>
      )
    }

    return (
      <StyleRoot>
      <div className="App">
        <h1>Hello</h1>
        <button style={style} onClick={this.switchNameHandler}>Switch Name</button> {/* call by reference do not use () coz it immediately revokes */}
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My Hobbies</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies</Person>
        <Product test="test1" click={this.switchNameHandler.bind(this,'Max!')} changed={this.nameChangedHandler}></Product>
        {application}
      </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
