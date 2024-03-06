import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className="sidebar-list">
      {
        <ul>
          <li>
            <a href="#"> Home </a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      }
    </div>
  );
};
