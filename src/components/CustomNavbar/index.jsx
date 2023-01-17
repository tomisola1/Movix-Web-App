import { useEffect, useState } from "react";
import { FaSearch, FaBars } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import tvImg from "../../assets/images/tv.png";
import { logout } from "../../store/authSlice";
import { searchMovies } from "../../store/movieSlice";
import { IMAGE_BASE_URL } from "../../util/config";
import "./style.css";

function CustomNavbar({ user, className, noScroll = false }) {
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.movie);
  const [query, setQuery] = useState("");
  const [state, setState] = useState({
    query: "",
    list: [],
  });

  useEffect(() => {
    dispatch(searchMovies());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e) => {
    setQuery(e.target.value);
    const results = movies.filter((movie) => {
      if (e.target.value === "") return movies;
      return movie.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setState({
      query: e.target.value,
      list: results,
    });
  };

  return (
    <>
      <nav
        className={`nav-bar ${className} ${noScroll ? "no-scroll" : ""}`}
        onScroll={noScroll}
      >
        <div className="left-nav">
          <img src={tvImg} alt="tv" />
          <span>Movix</span>
        </div>
        <div className="middle-nav">
          <input
            type="search"
            value={query}
            placeholder="What do you want to watch?"
            onChange={handleChange}
          />
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
      <ul className="search-list">
        {state.query === ""
          ? ""
          : state.list.map((movie) => {
              return (
                <li key={movie?.title} className="search-item">
                  <img
                    src={`${IMAGE_BASE_URL}/${movie?.poster_path}`}
                    alt=""
                    width="50px"
                  />
                  {movie?.title}
                </li>
              );
            })}
      </ul>
    </>
  );
}

export default CustomNavbar;
