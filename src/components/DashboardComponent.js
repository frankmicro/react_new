import React from "react";
import MainWrapper from "../containers/MainWrapper";
import ProductComponent from "./ProductComponent";
import { useSelector, useDispatch } from "react-redux";
import { updateAge, fetchUsers } from "../store/sliceReducers";
import food from '../food.json';

const DashboardComponent = (props) => {
    const dispatch = useDispatch();
    const {name, age} = useSelector((state) => {
        return state.sliceReducers;
    })
    const changeAge = (age) => {
        dispatch(updateAge(age))
    }
    const changeName = () => {
        dispatch(fetchUsers())
    }
    return (
        <div>
            <MainWrapper pageName="Recommended" class='wrapper'>
                <h1>{age}, {name}</h1>
                <button onClick={()=>changeAge(Math.floor(Math.random() * 10))}>Click Me!</button>
                <button onClick={()=>changeName(Math.random().toString(36).substring(2,7))}>Update Name!</button>
                <ProductComponent inventory={food} inventoryType="active" displayType="dashboard"></ProductComponent>
            </MainWrapper>
        </div>
    )
}

export default DashboardComponent;