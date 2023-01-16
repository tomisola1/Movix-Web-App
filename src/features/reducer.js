import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import movieReducer from "./movieSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  movie: movieReducer,
});

export default rootReducer;
