import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

import CastCard from "../CastCard/CastCard";
import "./style.css";

function FeaturedCasts() {
  return (
    <div className="container">
      <div className="heading">
        <h2>Featured Casts</h2>
        <div className="see-more">
          <span>See more</span>
          <FaAngleRight className="angle-right-icon" />
        </div>
      </div>
      <div className="movie-list">
        <FaAngleLeft className="angle-left" />
        <CastCard />
        <CastCard />
        <CastCard />
        <CastCard />
        <FaAngleRight className="angle-right" />
      </div>
    </div>
  );
}

export default FeaturedCasts;
