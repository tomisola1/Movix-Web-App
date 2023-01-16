import { FaHeart } from "react-icons/fa";
import imdb from "../../assets/images/imdb.png";
import rottenTomatoes from "../../assets/images/rotten_tomatoes.png";
import { IMAGE_BASE_URL } from "../../util/config";
import { formatAsPercent } from "../../util/helpers";
import { useState } from "react";
import "./style.css";

function MovieCard({ movie }) {
  const [like, setLike] = useState(false);
  return (
    <div className="card-container">
      <div className="like-and-tag">
        <span className="tag">tv series</span>
        <span
          className={`like ${like ? "red" : ""}`}
          onClick={() => setLike((like) => !like)}
        >
          <FaHeart />
        </span>
      </div>
      <div className="img-container">
        <img
          loading="lazy"
          src={`${IMAGE_BASE_URL}/${movie?.poster_path}`}
          alt="movieid"
          width="250px"
        />
      </div>
      <span className="release-date">USA,{movie?.release_date}</span>
      <h4 className="movie-name">{movie?.title}</h4>
      <div className="movie-rating">
        <div className="imdb-rating">
          <img src={imdb} alt="imdb-logo" />
          <span>{movie?.vote_average}/100</span>
        </div>
        <div className="rotten-tomatoes">
          <img src={rottenTomatoes} alt="rotten-tomatoes-logo" />
          <span>{formatAsPercent(movie?.vote_average)}</span>
        </div>
      </div>
      <span className="movie-genre">Horror,Action,Adventures</span>
    </div>
  );
}

export default MovieCard;
