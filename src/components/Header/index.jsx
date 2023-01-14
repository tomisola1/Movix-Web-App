import { FaPlayCircle } from "react-icons/fa";
import imdb from "../../assets/images/imdb.png";
import rottenTomatoes from "../../assets/images/rotten_tomatoes.png";
import "./style.css";

function Header() {
  return (
    <div className="header">
      <div className="description-text">
        <h1 className="movie-title">John Wick 3 : Parabellum</h1>
        <div className="rating">
          <div className="imdb-rating">
            <img src={imdb} alt="imdb-logo" />
            <span>86.0/100</span>
          </div>
          <div className="rotten-tomatoes">
            <img src={rottenTomatoes} alt="rotten-tomatoes-logo" />
            <span>97%</span>
          </div>
        </div>
        <p className="movie-description">
          John Wick is on the run after killing a member of the international
          assassins' guild, and with a $14 million price tag on his head, he is
          the target of hit men and women everywhere.
        </p>
        <button>
          <FaPlayCircle />
          WATCH TRAILER
        </button>
      </div>
    </div>
  );
}

export default Header;
