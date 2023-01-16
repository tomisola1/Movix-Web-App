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
import Movies from "./pages/HomePage/Movies";
import Casts from "./pages/HomePage/Casts";

function App() {
  initializeApp(firebaseConfig);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());

    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <Route
          path="/movies"
          element={
            <ProtectedRoute>
              <Movies />
            </ProtectedRoute>
          }
        />
        <Route
          path="/casts"
          element={
            <ProtectedRoute>
              <Casts />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
