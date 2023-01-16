import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import { ToastContainer, toast } from "react-toastify";
import CustomAuthCard from "../../../components/CustomAuthCard";
import CustomInput from "../../../components/CustomInput";
import CustomButton from "../../../components/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../../features/authSlice";
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

  const handleRegister = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Register
        const user = userCredential.user;
        toast.success("Registered successfully");
        setName("");
        setEmail("");
        setPassword("");
        if (user) navigate("/login");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          toast.error("The email address is already in use");
        } else if (error.code === "auth/invalid-email") {
          toast.error("The email address is not valid.");
        } else if (error.code === "auth/operation-not-allowed") {
          toast.error("Operation not allowed.");
        } else if (error.code === "auth/weak-password") {
          toast.error("The password is too weak.");
        } else if (error.code === "auth/wrong-password") {
          toast.error("You have entered a wrong password");
        } else {
          toast.error(error.message);
        }
      });
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
