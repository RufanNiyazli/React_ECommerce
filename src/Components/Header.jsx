import React from "react";
import logo from "../Image/logo.png";
import "../Css/Header.css";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { setDrawer } from "../Redux/basketSlice";
import { useDispatch, useSelector } from "react-redux";
function Header() {
  const { products } = useSelector((store) => store.basket);
  const dispatch = useDispatch();
  return (
    <div className="header">
      <div className="nav-bar">
        <div className="logo flex-row">
          {/* <img src={logo} alt="Logo" /> */}
          <Link className="name" to="/">
            E-Commerce
          </Link>
        </div>
        <div className="search-cart">
          <input type="text" placeholder="Search..." />
          <Badge
            onClick={() => {
              dispatch(setDrawer());
            }}
            badgeContent={products.length}
            color="primary"
          >
            <FaCartShopping
              
              style={{ fontSize: "30px", cursor: "pointer" }}
            />
          </Badge>
        </div>
      </div>
    </div>
  );
}

export default Header;
