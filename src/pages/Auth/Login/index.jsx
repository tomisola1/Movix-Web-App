import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import CustomAuthCard from "../../../components/CustomAuthCard";
import CustomInput from "../../../components/CustomInput";
import CustomButton from "../../../components/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../features/authSlice";
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
  console.log("my user", user);
  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        toast.success("Logged in successfully");
        if (user) navigate("/homepage");
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
        } else if (error.code === "auth/user-not-found") {
          toast.error(
            "This user does not exist. Login with authenticated user"
          );
        } else {
          toast.error(error.message);
        }
      });
  };

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
