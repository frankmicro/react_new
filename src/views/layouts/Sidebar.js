import React from "react";
import CartComponent from '../../components/CartComponent'

const Sidebar = (props) => {
  return (
    <div className="cart-container">
      <div className="cart">
        <h1 className="cart-title spread">
          <span>
            Cart
            <i className="icofont-cart-alt icofont-1x"></i>
          </span>
          <button
          onClick={() => props.handleSidebar(false)}
           className="cart-close">&times;</button>
        </h1>
        <CartComponent/>
      </div>
    </div>
  );
};

export default Sidebar;
