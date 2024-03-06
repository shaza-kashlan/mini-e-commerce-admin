import { Link } from "react-router-dom";
import { AboutPage } from "../pages/AboutPage";

export const Sidebar = () => {
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
