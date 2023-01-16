import { FaSearch, FaBars } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { useDispatch } from "react-redux";
import tvImg from "../../assets/images/tv.png";
import { logout } from "../../store/authSlice";
import "./style.css";

function CustomNavbar({ user, className, noScroll = false }) {
  const dispatch = useDispatch();

  return (
    <nav
      className={`nav-bar ${className} ${noScroll ? "no-scroll" : ""}`}
      onScroll={noScroll}
    >
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
        <div className="logout" onClick={() => dispatch(logout())}>
          logout <MdLogout />
        </div>
      </div>
    </nav>
  );
}

export default CustomNavbar;
