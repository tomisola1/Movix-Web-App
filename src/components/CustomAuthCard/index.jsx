import "./style.css";
import logo from "../../assets/images/logo.png";

function CustomAuthCard({ children, className }) {
  return (
    <div className={`auth-card ${className}`}>
      <div className="auth-logo">
        <img src={logo} alt="movix logo" />
      </div>
      {children}
    </div>
  );
}

export default CustomAuthCard;
