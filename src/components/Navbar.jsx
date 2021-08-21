import React from "react";
import {  useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Navbar-style.css";
import Search from "./Search"

const Navbar = () => {
  const { cartProducts } = useSelector((state) => state.cartReducer);
  return (
    <div className="navbar">
      <Link to="/">
        <h2 className="heading">FlipKart</h2>
      </Link>

      <Search />

      <Link to="/cart">
        <div className="navbar-cart">
          <img
            className="cart-img"
            src="https://image.flaticon.com/icons/svg/102/102276.svg"
            alt="shopping cart"
          />
          <div className="cart-counter">{cartProducts.length}</div>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
