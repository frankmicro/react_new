import React, { useState } from "react";
import ProductComponent from "../components/ProductComponent";
import {externalPostCall, externalGetCall} from '../helpers/api';

const Product = (props) => {
    useState(() => {
        const products = externalGetCall('v2/products/28');
        products.then(res => {
            console.log(res['data']);
        }).catch(error => {
            console.log(error);
        })
    },[]);

    return (
        <div>
            <ProductComponent inventory={props.inventory} inventoryType="active" displayType="products"></ProductComponent>
        </div>
    )
}

export default Product;