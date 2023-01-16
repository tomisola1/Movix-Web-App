import { initializeApp } from "firebase/app";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { getUser } from "./store/authSlice";
import { firebaseConfig } from "./firebase";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import HomePage from "./pages/HomePage";
import ProtectedRoute from "./ProtectedRoute/protectedRoute";

function App() {
  initializeApp(firebaseConfig);
  console.log("user from state");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, []);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/homepage"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
