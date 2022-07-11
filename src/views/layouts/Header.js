import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
    return (
      <div>
      <header className="top-bar spread">
      <nav className="top-bar-nav">
       <Link to="/" className="top-bar-link">
         <i className="icofont-spoon-and-fork"></i>
         <span>Home</span>
       </Link>
       <Link to="/" className="top-bar-link">
         <span>Products</span>
       </Link>
       <Link to="/learn" className="top-bar-link">
         <span>Past Orders</span>
       </Link>
     </nav>
     <Link to="/" className="top-bar-cart-link">
       <i className="icofont-cart-alt icofont-1x"></i>
       <span>Cart (0)</span>
     </Link>
     
             </header>  
             </div>
    );
}

export default Header;