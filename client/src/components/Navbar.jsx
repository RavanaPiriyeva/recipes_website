import React from "react";
//import '../style/style.scss'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav>
        <div className="d-flex">
          <div className="phone">Call Us | +918900045888</div>
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
