import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../app/store.js";
import mainlogo from "../../../public/pictures/mainlogo.png";
import { ShoppingBasket } from "@mui/icons-material";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import "./navbar.css";
import OrderHx from "../OrderHx/orderHx.js";

const Navbar = () => {

  const isLoggedIn = useSelector((state) => !!state.auth.me.id);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutRedirect = () => {
    dispatch(logout());
    navigate("/home");
  };

  const cart = useSelector((state) => state.cart);

  return (
    <div>
      {/* need to work on routes */}
      <nav id="navDiv">
        <ul id="navBar">
          <li className="navbarLi">
            <img id="mainlogo" src={mainlogo} alt="mainlogo" />
            <Link className="navLinks" to="/home">
              Home
            </Link>
            <Link className="sneakBtns" to="/products">
              Explore
            </Link>
            <Link className="sneakBtns" to="/orderHx">
              Order History
            </Link>
          </li>
          <li className="navbarLi">
            {isLoggedIn ? (
          <div>
            {/* The navbar will show these links after you log in */}
            <button className="navLinks" type="button" onClick={logoutRedirect}>
              Logout
            </button>
          </div>
        ) : (
          <div>
            {/* The navbar will show these links before you log in */}
            <Link className="navLinks" to="/login">Login</Link>
            <Link className="navLinks" to="/signup">Sign Up</Link>
          </div>
        )}
            <Link id="cart" to="/cart">
              <ShoppingBagIcon />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
