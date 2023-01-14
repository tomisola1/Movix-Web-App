import { FaHeart } from "react-icons/fa";
import imdb from "../../assets/images/imdb.png";
import rottenTomatoes from "../../assets/images/rotten_tomatoes.png";
import cardImg from "../../assets/images/Poster_img.png";
import "./style.css";

function MovieCard() {
  return (
    <div className="card-container">
      <div className="like-and-tag">
        <span className="tag">tv series</span>
        <span className="like">
          <FaHeart />
        </span>
      </div>
      <div className="img-container">
        <img src={cardImg} alt="" />
      </div>
      <span className="release-date">USA, 2016-Current</span>
      <h4 className="movie-name">Stranger Things</h4>
      <div className="movie-rating">
        <div className="imdb-rating">
          <img src={imdb} alt="imdb-logo" />
          <span>86.0/100</span>
        </div>
        <div className="rotten-tomatoes">
          <img src={rottenTomatoes} alt="rotten-tomatoes-logo" />
          <span>97%</span>
        </div>
      </div>
      <span className="movie-genre">Horror,Action,Adventures</span>
    </div>
  );
}

export default MovieCard;
