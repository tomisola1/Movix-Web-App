import cast from "../../assets/images/cast.png";
import "./style.css";

function CastCard() {
  return (
    <div className="cast-wrapper">
      <img src={cast} alt="" />
      <span className="name">Timothee</span>
    </div>
  );
}

export default CastCard;
