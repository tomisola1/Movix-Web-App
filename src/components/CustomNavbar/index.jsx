import { useEffect, useState } from "react";
import { FaSearch, FaBars } from "react-icons/fa";
import tvImg from "../../assets/images/tv.png";
import "./style.css";

function CustomNavbar({ user }) {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  // useEffect(() => {
  //   changeBackground()
  //   // adding the event when scroll change background
  //   window.addEventListener("scroll", changeBackground)
  // })

  return (
    <nav className={navbar ? "nav-bar" : "navbar"} onScroll={changeBackground}>
      <div className="left-nav">
        <img src={tvImg} alt="tv" />
        <span>Movix</span>
      </div>
      <div className="middle-nav">
        <input type="search" placeholder="What do you want to watch?" />
        <FaSearch className="search-icon" />
      </div>
      <div className="right-nav">
        <span className="user">Hi, {user}</span>
        <span className="menu">
          <FaBars className="menu-icon" />
        </span>
      </div>
    </nav>
  );
}

export default CustomNavbar;
