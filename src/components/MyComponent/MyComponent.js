import React  from "react";
import './index.css';
import { useState } from "react";
import MyChildComponent from "../MyChildComponent/MyChildComponent";

const MyComponent = (props) => {
    const [value, setValue] = useState('Hello World');
    const handleChange = (e) => setValue(e.target.value);
    const name = 'child it is..';
    const swithHandler = () => {
        console.log('in here.....');
    }
    const style = {
        color:'red' 
    }
    return (
      <div>
        <input style={style} type="text" value={value} onChange={handleChange} />
        <p>{value}</p>
        <p>{props.title}</p>
        <MyChildComponent name={name} clickMe={swithHandler}/>
        <button className="btn">clicked</button>
      </div>
    );
  };

  export default MyComponent;