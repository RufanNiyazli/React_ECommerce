import React from "react";
import logo from "../Image/logo.png";
import "../Css/Header.css";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header">
      <div className="nav-bar">
        <div className="logo flex-row">
          {/* <img src={logo} alt="Logo" /> */}
          <Link className="name" to="/">E-Commerce</Link>
        </div>
        <div className="search-cart">
          <input type="text" placeholder="Search..." />
          <FaCartShopping style={{ fontSize: "30px", cursor: "pointer" }} />
        </div>
      </div>
    </div>
  );
}

export default Header;
