import { FaSearch, FaBars } from "react-icons/fa";
import tvImg from "../../assets/images/tv.png";
import "./style.css";

function CustomNavbar({ user }) {
  return (
    <nav className="nav-bar">
      <div className="left-nav">
        <img src={tvImg} alt="tv" />
        <span>Movix</span>
      </div>
      <div className="middle-nav">
        <input type="search" placeholder="What do you want to watch?" />
        <FaSearch className="search-icon" />
      </div>
      <div className="right-nav">
        <span>Hi, {user}</span>
        <span className="menu">
          <FaBars className="menu-icon" />
        </span>
      </div>
    </nav>
  );
}

export default CustomNavbar;
