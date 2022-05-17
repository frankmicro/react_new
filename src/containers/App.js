import './App.css';
import React, {Component} from 'react'
//import MyComponent from '../components/MyComponent/MyComponent'
import Header from '../views/layouts/Header';
import Product from '../views/Product';
import Home from '../views/Home';
import food from '../food.json';

class App extends Component {
  //https://blog.logrocket.com/react-lifecycle-methods-tutorial-examples/
  constructor() {
    super();
    this.state = { value: 'Hello World', inventory : food };
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
        <Header />
        <Home inventory={this.state.inventory}></Home>
        <Product inventory={this.state.inventory}></Product>
      </div>
    );
  }
}

export default App;
