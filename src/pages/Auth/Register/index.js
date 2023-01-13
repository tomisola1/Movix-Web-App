import { Link } from "react-router-dom";
import CustomAuthCard from "../../../components/CustomAuthCard";
import CustomInput from "../../../components/CustomInput";
import CustomButton from "../../../components/CustomButton";

function Register() {
  return (
    <CustomAuthCard>
      <div className="input-container">
        <div className="authcard-text">
          <h3>Hi, Welcome</h3>
          <p>Please sign-in to your account and start your experience</p>
        </div>
        <CustomInput placeholder="Full Name" />
        <CustomInput placeholder="Email" />
        <CustomInput className="password-input" placeholder="Password" />
        <CustomButton btnText="register" />
        <div className="authcard-bottomtext">
          <p>Already have an account?</p>
          <Link to="/">Login</Link>
        </div>
      </div>
    </CustomAuthCard>
  );
}

export default Register;
