import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomAuthCard from "../../../components/CustomAuthCard";
import CustomInput from "../../../components/CustomInput";
import CustomButton from "../../../components/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../store/authSlice";
import "./style.css";

function Login() {
  const dispatch = useDispatch();
  const { isLoading, user } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login(email, password));
  };

  const navigate = useNavigate();

  if (user) {
    navigate("/homepage");
  }

  return (
    <CustomAuthCard>
      <div className="authcard-text">
        <h3>Hi, Welcome</h3>
        <p>Please sign-up to start your experience</p>
      </div>
      <form className="input-container" onSubmit={handleSubmit}>
        <CustomInput
          id="email"
          name="email"
          value={email}
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <CustomInput
          className="password-input"
          id="password"
          name="password"
          value={password}
          type="password"
          placeholder="Password"
          withIcon="true"
          onChange={(e) => setPassword(e.target.value)}
        />
        <CustomButton
          btnText="login"
          onClick={handleSubmit}
          loading={isLoading}
        />
      </form>
      <div className="authcard-bottomtext">
        <p>Don't have an account?</p>
        <Link to="/">Register</Link>
      </div>
      <ToastContainer theme="colored" />
    </CustomAuthCard>
  );
}

export default Login;
