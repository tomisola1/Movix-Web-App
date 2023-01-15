import { Link } from "react-router-dom";
import { useState } from "react";
import CustomAuthCard from "../../../components/CustomAuthCard";
import CustomInput from "../../../components/CustomInput";
import CustomButton from "../../../components/CustomButton";
import { auth } from "../../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./style.css";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert("Signed in user: ", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("An error occured: ", errorCode, errorMessage);
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
          onChange={(e) => setPassword(e.target.value)}
        />
        <CustomButton btnText="login" onClick={handleLogin} />
      </form>
      <div className="authcard-bottomtext">
        <p>Don't have an account?</p>
        <Link to="/">Register</Link>
      </div>
    </CustomAuthCard>
  );
}

export default Login;
