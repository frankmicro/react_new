import React, { useState } from "react";
import ProductList from "../views/ProductList";
import food from "../food.json";
import { useSelector, useDispatch } from "react-redux";
import { updateCart, updateInventory, deleteCartElement, updateCartTotal } from "../store/productReducer";
import {filterArray} from '../containers/utils'

const ProductComponent = (props) => {
  const dispatch = useDispatch();
  const [tempTotal, setTempTotal] = useState(0);
  const { cart, inventory } = useSelector((state) => {
    return state.productReducer;
  });
  const addToCart = (id, quantity) => {
    let tempCart = filterArray(cart, id);
    if (tempCart.length) {
      let index = cart
        .map((res) => {
          return res.id;
        })
        .indexOf(id);
        dispatch(deleteCartElement(index))
      tempCart = tempCart.map((res) => ({
        ...res,
        total: res.price["USD"] * quantity + parseFloat(res.total),
        totalQuantity: res.totalQuantity + quantity,
      }));
      dispatch(updateCart(tempCart[0]));
      let cartSubtotal = cart.reduce((acc, res) => {
          return acc += res.total
      },0);
      dispatch(updateCartTotal(cartSubtotal));
    } else {
      tempCart = inventory
        .filter((res) => res.id === id)
        .map((res) => ({
          ...res,
          total: res.price["USD"] * quantity,
          totalQuantity: quantity,
        }));
      if (!tempTotal) {
        setTempTotal(tempCart[0]['total']);
      }
      dispatch(updateCart(tempCart[0]));
      dispatch(updateCartTotal(tempTotal));
    }
    
  };
  useState(() => {
    dispatch(updateInventory(food));
  }, []);
  let inventoryData = null;
  if (props.displayType === "dashboard") {
    inventoryData = props.inventory.filter(
      (res) => res.status === props.inventoryType
    );
    if (props.productSearch) {
      inventoryData = inventoryData.filter(res => res.name.toLowerCase().includes(props.productSearch.toLowerCase()));
    }
  }
  if (props.displayType === "products") {
    inventoryData = inventory;
  }
  return (
    <div>
      {inventoryData
        ? inventoryData.map((res, index) => (
            <div className="card" key={index}>
              <ProductList
                addToCart={addToCart}
                key={res.id}
                id={res.id}
                name={res.name}
                icon={res.icon}
                price={res.price["USD"]}
                type={res.type}
                status={res.status}
              ></ProductList>
            </div>
          ))
        : null}
    </div>
  );
};

export default ProductComponent;
