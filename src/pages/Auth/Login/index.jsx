import { Link } from "react-router-dom";
import CustomAuthCard from "../../../components/CustomAuthCard";
import CustomInput from "../../../components/CustomInput";
import CustomButton from "../../../components/CustomButton";
import "./style.css";

function Login() {
  return (
    <CustomAuthCard>
      <form className="input-container">
        <div className="authcard-text">
          <h3>Hi, Welcome</h3>
          <p>Please sign-up to start your experience</p>
        </div>
        <CustomInput type="email" placeholder="Email" />
        <CustomInput
          className="password-input"
          type="password"
          placeholder="Password"
        />
        <CustomButton btnText="login" />
        <div className="authcard-bottomtext">
          <p>Don't have an account?</p>
          <Link to="/register">Register</Link>
        </div>
      </form>
    </CustomAuthCard>
  );
}

export default Login;
