import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import CustomAuthCard from "../../../components/CustomAuthCard";
import CustomInput from "../../../components/CustomInput";
import CustomButton from "../../../components/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../../store/authSlice";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";

function Register() {
  const { isLoading, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(register(email, password));
  };

  if (user) {
    navigate("/login");
  }

  return (
    <CustomAuthCard className="auth-cards">
      <div className="authcard-text">
        <h3>Hi, Welcome</h3>
        <p>Please sign-in to your account and start your experience</p>
      </div>
      <form className="input-container" onSubmit={handleSubmit}>
        <CustomInput
          id="name"
          name="name"
          type="text"
          value={name}
          placeholder="Full Name"
          onChange={(e) => setName(e.target.value)}
        />
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
          btnText="register"
          onClick={handleSubmit}
          loading={isLoading}
        />
      </form>
      <div className="authcard-bottomtext">
        <p>Already have an account?</p>
        <Link to="/login">Login</Link>
      </div>
      <ToastContainer theme="colored" />
    </CustomAuthCard>
  );
}

export default Register;
