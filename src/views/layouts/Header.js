import { useLocation, Navigate, Outlet } from "react-router-dom";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { clearStorage } from "../../helpers/localstorage";


const Header = (props) => {
  const location = useLocation();
  const { cart } = useSelector((state) => {
    return state.productReducer;
  });
  const logoutUser = () => {
    clearStorage();
    <Navigate to="/login" state={{ from: location }} replace />
  }
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
            {/* <Link to="/product-details" className="top-bar-link">
              <span>Past Orders</span>
            </Link> */}
            <a href="#" onClick={logoutUser} className="top-bar-link">
              <span>Logout</span>
            </a>
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