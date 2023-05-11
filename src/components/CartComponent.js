import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteCartElement, updateCartTotal } from "../store/productReducer";

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
        <tr key={res?.id}>
                  <td width={2} height={1}>
                    <i className={`icofont-${res?.icon} icofont-3x`}></i>
                  </td>
                  <td>{res?.name}</td>
                  <td>{res?.price['USD']}</td>
                  <td className="center">{res?.totalQuantity}</td>
                  <td>{res?.total.toFixed(2)}</td>
                  <td className="center">
                    <button 
                    onClick={() => removeItems(index, res?.total)}
                    className="btn btn-light cart-remove">&times;</button>
                  </td>
                </tr>
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
