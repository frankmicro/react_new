import React from "react";
import ProductList from "../views/ProductList";

const ProductComponent = (props) => {
    let inventoryData = null;
    if (props.displayType === 'dashboard') {
        inventoryData = props.inventory.filter(res => res.status === props.inventoryType);
    }
    if (props.displayType === 'products') {
        inventoryData = props.inventory;
    }
    return (
    <div>
        {(inventoryData) ? inventoryData.map((res, index) => 
        <div className="card" key={index}>
            <ProductList 
            key={res.id}
            id={res.id}
            name={res.name} 
            icon={res.icon}
            price={res.price['USD']}
            type={res.type}
            status={res.status}
            ></ProductList>
        </div>
        ) : null 
        }
      </div>
    );
}

export default ProductComponent;