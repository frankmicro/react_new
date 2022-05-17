import React from "react";
import MainWrapper from "../containers/MainWrapper";
import ProductComponent from "./ProductComponent";
import { useSelector, useDispatch } from "react-redux";
import {fetchName} from "../store/userActions";

const DashboardComponent = (props) => {
    const dispatch = useDispatch();
    const {name, age} = useSelector((state) => {
        return state;
    })
    const updateAge = (age) => {
        dispatch({type:'UPDATE_AGE', payload : age})
    }
    const updateName = async () => {
        dispatch(fetchName());
    }
    return (
        <div>
            <h1>{name}, {age}</h1>
            <button onClick={()=>updateAge(Math.floor(Math.random() * 10))}>Click Me!</button>
            <button onClick={()=>updateName()}>Update Name!</button>
            <MainWrapper pageName="Recommended" class='wrapper'>
                <ProductComponent inventory={props.inventory} inventoryType="active" displayType="dashboard"></ProductComponent>
            </MainWrapper>
        </div>
    )
}

export default DashboardComponent;