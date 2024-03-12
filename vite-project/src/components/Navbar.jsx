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
      <h3>Kwik E-Market</h3>
    </div>
  );
};

export default Navbar;
