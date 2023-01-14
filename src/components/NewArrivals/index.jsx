import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import MovieCard from "../MovieCard";
import "./style.css";

function NewArrivals() {
  return (
    <div className="container">
      <div className="heading">
        <h2>New Arrival</h2>
        <div className="see-more">
          <span>See more</span>
          <FaAngleRight className="angle-right-icon" />
        </div>
      </div>
      <div className="movie-list">
        <FaAngleLeft className="angle-left" />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <FaAngleRight className="angle-right" />
      </div>
    </div>
  );
}

export default NewArrivals;
