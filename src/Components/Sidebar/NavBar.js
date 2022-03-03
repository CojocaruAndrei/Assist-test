import React from "react";
import "./navbar.css";
import { useNavigate, NavLink } from "react-router-dom";
import { ReactDOM } from "react";
import img from "../../Images/logo.png";
const NavBar = () => {
  const history = useNavigate();
  const URL = window.location.pathname.split("/")[1];
  return (
    <div className="NavBar--border">
      <div className="NavBar--logo">
        <img className="NavBar--img" src={img} alt="logo" />
      </div>
      <div className="NavBar--btn">
        <ul>
          <li
            id="li1"
            className={URL === "" && "active-link"}
            onClick={() => history("/")}
          >
            Home
          </li>
          <li
            id="li2"
            className={URL === "About" && "active-link"}
            onClick={() => history("/about")}
          >
            About
          </li>
          <li
            id="li3"
            className={URL === "Contact" && "active-link"}
            onClick={() => history("/contact")}
          >
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};
export default NavBar;
