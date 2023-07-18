import React from "react";
//import '../style/style.scss'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="d-flex flex-div">
          <div className="logo">
            <Link to="/">FOODI</Link>
          </div>

          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/categories">Categories</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="login">
            <Link to="/login">Login</Link>
            <Link to="/register">/ Register</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
