import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import VideoCard from "../VideoCard";
import "./style.css";

function ExclusiveVideos() {
  return (
    <div className="exclusive-container">
      <div className="heading">
        <h2>Exclusive Videos</h2>
        <div className="see-more">
          <span>See more</span>
          <FaAngleRight className="angle-right-icon" />
        </div>
      </div>
      <div className="movie-list">
        <FaAngleLeft className="angle-left" />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <FaAngleRight className="angle-right" />
      </div>
    </div>
  );
}

export default ExclusiveVideos;
