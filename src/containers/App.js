import './App.css';
import React, {Component} from 'react'
//import MyComponent from '../components/MyComponent/MyComponent'
import Product from '../views/Product';
import Home from '../views/Home';
import food from '../food.json';
import AuthComponent from '../components/Auth/AuthComponent';
import  DashboardComponent from '../components/DashboardComponent';

class App extends Component {
  componentDidMount () {}

  //https://blog.logrocket.com/react-lifecycle-methods-tutorial-examples/
  constructor() {
    super();
    this.state = { value: 'Hello World', inventory : food, flag : false };
  }
  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };
  render() {
    return (
      <div>
        {/* <MyComponent title={this.props.title}/> */}
        {/* <p>{this.props.title}</p>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <p>{this.state.value}</p> */}
        <DashboardComponent inventory={this.state.inventory}/>
          
          
          { (this.state.flag) ? <Home inventory={this.state.inventory}></Home> : null}
          { (this.state.flag) ? <Product inventory={this.state.inventory}></Product> : null }
      </div>
    );
  }
}

export default App;
