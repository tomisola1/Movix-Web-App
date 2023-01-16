import { IMAGE_BASE_URL } from "../../util/config";
import "./style.css";

function CastCard({ cast }) {
  return (
    <div className="cast-wrapper">
      <img src={`${IMAGE_BASE_URL}/${cast?.profile_path}`} alt="" />
      <span className="name">{cast?.name}</span>
    </div>
  );
}

export default CastCard;
