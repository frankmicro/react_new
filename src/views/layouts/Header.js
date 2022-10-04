import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = (props) => {
  const { cart } = useSelector((state) => {
    return state.productReducer;
  });
    return (
      <div>
        <header className="top-bar spread">
          <nav className="top-bar-nav">
            <Link to="/" className="top-bar-link">
              <i className="icofont-spoon-and-fork"></i>
              <span>Home</span>
            </Link>
            <Link to="/products" className="top-bar-link">
              <span>Products</span>
            </Link>
            <Link to="/product-details" className="top-bar-link">
              <span>Past Orders</span>
            </Link>
          </nav>
          <a
            onClick={() => props.handleSidebar(true)}
            style={{
              cursor: "pointer",
            }}
            className="top-bar-cart-link"
          >
            <i className="icofont-cart-alt icofont-1x"></i>
            <span>Cart ({cart.length})</span>
          </a>
        </header>
      </div>
    );
}

export default Header;