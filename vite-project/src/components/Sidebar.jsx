import React from "react";
import { Link } from "react-router-dom";
import { AboutPage } from "../pages/AboutPage";

const Sidebar = ({ isOpen }) => {
  return (
    <div className="sidebar-list">
      <Link to={<AboutPage/>}>Home</Link>

      {/* {
        <ul>
          <li>
            <a href="#"> Home </a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      } */}
    </div>
  );
};

export default Sidebar;
