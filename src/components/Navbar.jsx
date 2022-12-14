import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/components/Navbar.scss";
import { useLocation } from "react-router-dom";
const Navbar = () => {
  let location = useLocation("/");
  const [hoover, setHoover] = useState("");
  // console.log(location.pathname);
  return (
    <nav className="nav-container">
      <div className="Logo-container">
        <Link to={"/"}>
          <img
            className="logo"
            src={require("../imgs/logo.png")}
            alt="logo"
            width="150"
            height="45"
          />
        </Link>
      </div>
      <div className="navbar1-container">
        <ul className="navbar1-wrapper">
          <li className="navbar1-list-item">
            <Link
              to="/"
              className={
                location.pathname === "/"
                  ? "active"
                  : "" || hoover === "home"
                  ? "hoovered"
                  : "navbar1-list-item"
              }
              onMouseEnter={() => setHoover("home")}
              onMouseLeave={() => setHoover("")}
            >
              Home
            </Link>
          </li>
          <li className="navbar1-list-item">
            <Link
              to="/about"
              className={
                location.pathname === "/about"
                  ? "active"
                  : "" || hoover === "about"
                  ? "hoovered"
                  : "navbar1-list-item"
              }
              onMouseEnter={() => setHoover("about")}
              onMouseLeave={() => setHoover("")}
            >
              About Us
            </Link>
          </li>
          <li className="navbar1-list-item">
            <Link
              to="/services"
              className={
                location.pathname === "/services"
                  ? "active"
                  : "" || hoover === "services"
                  ? "hoovered"
                  : "navbar1-list-item"
              }
              onMouseEnter={() => setHoover("services")}
              onMouseLeave={() => setHoover("")}
            >
              Our Services
            </Link>
          </li>
          <li className="navbar1-list-item">
            <Link
              to="/contact"
              className={
                location.pathname === "/contact"
                  ? "active"
                  : "" || hoover === "contact"
                  ? "hoovered"
                  : "navbar1-list-item"
              }
              onMouseEnter={() => setHoover("contact")}
              onMouseLeave={() => setHoover("")}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
