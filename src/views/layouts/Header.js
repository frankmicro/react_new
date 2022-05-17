import React from "react";

const Header = (props) => {
    return (
        <header className="top-bar spread">
    <nav className="top-bar-nav">
      <a href="/" className="top-bar-link">
        <i className="icofont-spoon-and-fork"></i>
        <span>Home</span>
      </a>
      <a href="/products" className="top-bar-link">
        <span>Products</span>
      </a>
      <a href="/past-orders" className="top-bar-link">
        <span>Past Orders</span>
      </a>
    </nav>
    <a className="top-bar-cart-link">
      <i className="icofont-cart-alt icofont-1x"></i>
      <span>Cart (0)</span>
    </a>
  </header>
    );
}

export default Header;