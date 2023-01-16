import { FaPlayCircle } from "react-icons/fa";
import imdb from "../../assets/images/imdb.png";
import rottenTomatoes from "../../assets/images/rotten_tomatoes.png";
import { IMAGE_BASE_URL } from "../../util/config";
import { formatAsPercent } from "../../util/helpers";
import "./style.css";

function HeroImage(props) {
  return (
    <div
      className="header"
      style={{
        backgroundImage: `url(${IMAGE_BASE_URL}/${props.heroMovie?.backdrop_path})`,
      }}
    >
      <div className="description-text">
        <h1 className="movie-title"> {props.heroMovie?.original_title}</h1>
        <div className="rating">
          <div className="imdb-rating">
            <img src={imdb} alt="imdb-logo" />
            <span>{props.heroMovie?.vote_average}/100</span>
          </div>
          <div className="rotten-tomatoes">
            <img src={rottenTomatoes} alt="rotten-tomatoes-logo" />
            <span>{formatAsPercent(props.heroMovie?.vote_average)}</span>
          </div>
        </div>
        <p className="movie-description">{props.heroMovie?.overview}</p>
        <button>
          <FaPlayCircle />
          WATCH TRAILER
        </button>
      </div>
    </div>
  );
}

export default HeroImage;
