import { FaPlayCircle } from "react-icons/fa";
import thumbnail from "../../assets/images/Thumbnails.png";
import "./style.css";

function VideoCard() {
  return (
    <div className="card-wrapper">
      <FaPlayCircle className="play-circle-icon" />
      <img src={thumbnail} alt="" />
      <span className="title">Lamb (2021) Trailer</span>
    </div>
  );
}

export default VideoCard;
