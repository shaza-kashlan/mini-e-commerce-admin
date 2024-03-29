import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <ul className="menu">
        <li>
          <Link to="/AddProduct">Add Product</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About-US">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
