import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteCartElement, updateCartTotal } from "../store/productReducer";
import Cart from "../views/Cart";

const CartComponent = () => {
  const dispatch = useDispatch();
  const { cart, cartTotal } = useSelector((state) => {
    return state.productReducer;
  });
  const removeItems = (itemIndex, total) => {
    dispatch(deleteCartElement(itemIndex))
    dispatch(updateCartTotal(cartTotal - total));
  }
  return (
    <div className="cart-body">
       <table className="cart-table">
         <thead>
           <tr>
             <th>
               Icon
             </th>
             <th>Product</th>
             <th>Price</th>
             <th>Qty</th>
             <th>Total</th>
             <th>
               Actions
             </th>
           </tr>
         </thead>
         <tbody>
     {
      cart.length ? cart.map((res, index) => (
        <Cart  index={index} {...res} removeItems={removeItems} key={res?.id} />
      )) : 
      <tr className="center">
           <td colSpan="6">No items in cart</td>
         </tr>
     }
     </tbody>
     </table>
      <div className="spread">
        <span>
          <strong>Total:</strong> {cartTotal.toFixed(2)}
        </span>
        <button className="btn btn-light">Checkout</button>
      </div>
    </div>
  );
};

export default CartComponent;
