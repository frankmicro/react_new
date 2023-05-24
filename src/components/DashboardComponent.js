import React, { useState } from "react";
import ProductComponent from "./ProductComponent";
import { useSelector, useDispatch } from "react-redux";
import { updateAge, fetchUsers } from "../store/sliceReducers";
import food from '../food.json';

const DashboardComponent = (props) => {
    const dispatch = useDispatch();
    const [searchInput, setSearchInput ] = useState('');
    const [productSearch, setProductSearch] = useState('');
    const inputTextBoxStyle = {width:"300px", height:"20px", margin:"5px"};
    const actionBtnStyle = {margin:"0px 2px 10px"};
    const {name, age} = useSelector((state) => {
        return state.sliceReducers;
    })
    const changeAge = (age) => {
        dispatch(updateAge(age))
    }
    const changeName = () => {
        dispatch(fetchUsers())
    }
    const changeText = (data) => {
        setSearchInput(data)
    }
    const productSearchFn = (data) => {
        setProductSearch(data);
    }
    return (
        <div>
                {/* <h1>{age}, {name}</h1>
                <button className="btn btn-primary" 
                    style={actionBtnStyle}
                    onClick={()=>changeAge(Math.floor(Math.random() * 10))}>Click Me!
                </button>
                <button className="btn btn-primary" 
                    style={actionBtnStyle}
                    onClick={()=>changeName(Math.random().toString(36).substring(2,7))}>Update Name!
                </button> */}
                <>
                    <input type="text" 
                    placeholder="Search Products"
                    style={inputTextBoxStyle}
                    value={searchInput}
                    onChange={(e) =>(
                        changeText(e.target.value)
                    )}/>
                </>
                <button className="btn btn-primary" 
                    style={actionBtnStyle}
                    onClick={()=>{
                        productSearchFn(searchInput)
                    }}>Search
                </button>
                <button className="btn btn-info" 
                    style={actionBtnStyle}
                    onClick={()=>{
                        productSearchFn('')
                        changeText('')
                    }}>Reset
                </button>
                <ProductComponent inventory={food} productSearch={productSearch} inventoryType="active" displayType="dashboard"></ProductComponent>
        </div>
    )
}

export default DashboardComponent;