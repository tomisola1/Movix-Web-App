import "./style.css";
import logo from "../../assets/images/logo.png";

function CustomAuthCard({ children }) {
  return (
    <div className="auth-card">
      <div className="auth-logo">
        <img src={logo} alt="movix logo" />
      </div>
      {children}
    </div>
  );
}

export default CustomAuthCard;
