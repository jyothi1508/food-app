import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
     <Link to="/"> <h1 className="logo">🍔 Foodie</h1></Link>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
      
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">SignUp</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
