import React from "react";
import MainWrapper from "../containers/MainWrapper";
import ProductComponent from "../components/ProductComponent";

const Product = (props) => {
    return (
        <div>
            <MainWrapper pageName="Products" class='wrapper'>
                <ProductComponent inventory={props.inventory} inventoryType="active" displayType="products"></ProductComponent>
            </MainWrapper>
        </div>
    )
}

export default Product;