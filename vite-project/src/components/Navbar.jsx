import React from "react";
import sideBarImage from "../assets/menu-icon.png";

const Navbar = ({ onToggleSidebar }) => {
  return (
    <div className="navbar">
      <img
        src={sideBarImage}
        className="sideBarImage"
        alt="sideBarImage"
        onClick={onToggleSidebar}
      />
      <h3>E-commerce App</h3>
    </div>
  );
};

export default Navbar;
