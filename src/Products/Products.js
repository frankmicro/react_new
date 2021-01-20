import React,{ useState } from "react";
import UserInput from "../UserInput/UserInput";
import './Products.css';
import Radium from "radium";

const Product = props => {
    const [productState, setProductState] = useState({ //always two elements first current state second is setter
        products:[
            {
                name:'Apple'
            },
            {
                name:'Banana'
            }
        ]
    });

    const [inputGetter, inputSetter] = useState({
        inputs:[
            {
                name:'rohan'
            }
        ],
        showElement:false
    });

    //const [otherState, setOtherState] = useState('some string');

    const switchNameHandler = () => {
        setProductState({
            products:[
                {
                    name:'Apples'
                },
                {
                    name:'Bananas'
                }
            ]   
        });
    }

    const inputSwitchHandler = (event) => {
        inputSetter({
            inputs:[
                {
                    name:event.target.value
                }
            ],
            showElement:!inputGetter.showElement
        });
    }

    let products = null;

    if (inputGetter.showElement) {
        products = (
            <p>Hello</p>
        );
    }

    const deleteProductHandler = (name) => {
        const newList = productState.products.filter((item) => item.name !== name);
        console.log(newList);
        setProductState({products:newList});
        console.log(productState);
       // console.log(index);
       // let productsDelete = productState.products.splice(index,1);
        //console.log(productState.products);
        //console.log(productsDelete);
        //setProductState.products
    } 

    let productLoop = null;
    let productCounts = productState.products.length;
    let classes = null;
    classes = productCounts === 1 ? "red" : "green";
    if (productCounts > 0) {
        productLoop = productState.products.map((item, index) => (
            <li className={classes} onClick={() => deleteProductHandler(item.name)} key={item.name}>{item.name}</li>
        ));
    }
    const style = {
        '@media (min-width:500px)':{
            width:'450px'
        }
    }

    let terneryOp = inputGetter.showElement ? 
    <p>{inputGetter.inputs[0].name}</p> : 
    <p>Justified</p>

    return ( //no need to render in hooks
        <div className="Products" style={style}>{/** style will override class */}
            {terneryOp}
            {productLoop}
            {/* {productState.products.map(item => (
                <li
                key={item.name}>
                {item.name}
                </li>
            ))} */}
            <UserInput changed={inputSwitchHandler}/>
            {/* <h1>Hello {productState.products[0].name}, {props.test}</h1> */}
            <button onClick={switchNameHandler}>Add products</button>
            <p onClick={props.click}>sssssss</p>
            <input type="text" onChange={props.changed}/>
            {products}
        </div>
    )
}

export default Radium(Product);
