import { Link } from "react-router-dom";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import CustomAuthCard from "../../../components/CustomAuthCard";
import CustomInput from "../../../components/CustomInput";
import CustomButton from "../../../components/CustomButton";
import "./style.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleRegister = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Register
        const user = userCredential.user;
        alert(`${user} is registered successfully`);
        setName("");
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error ocured: ", errorCode, errorMessage);
      });
  };

  return (
    <CustomAuthCard>
      <div className="authcard-text">
        <h3>Hi, Welcome</h3>
        <p>Please sign-in to your account and start your experience</p>
      </div>
      <form className="input-container" onSubmit={handleSubmit}>
        <CustomInput
          id="name"
          name="name"
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
          onChange={(e) => setPassword(e.target.value)}
        />
        <CustomButton btnText="register" onClick={handleRegister} />
      </form>
      <div className="authcard-bottomtext">
        <p>Already have an account?</p>
        <Link to="/login">Login</Link>
      </div>
    </CustomAuthCard>
  );
}

export default Register;
