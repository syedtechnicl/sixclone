import React from "react";
import { Link } from "react-router-dom";
import "../Styles/nav.css";
import { useSelector } from "react-redux";
const Navbar = () => {
  const main = useSelector((dd) => dd.cart);
  return (
    <>
      <div className="navbar">
        <span className="logo">REDUX STORE</span>
        <div className="nav-links">
          <Link className="navLink" to="/">
            Home
          </Link>
          <Link className="navLink" to="/cart">
            Cart
          </Link>
          <span className="cartCount">Cart items: {main.length}</span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
