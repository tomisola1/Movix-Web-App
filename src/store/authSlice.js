import { createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../firebase";

const initialState = {
  user: null,
  isLoading: false,
  error: false,
};

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUser: (state, action) => {
      state.user = action.payload;
    },
    loginLoading: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    loginFail: (state, action) => {
      state.isLoading = false;
      state.user = null;
      state.error = action.payload;
    },
  },
});

export const { saveUser, loginLoading, loginSuccess, loginFail } =
  authSlice.actions;

export const login = (email, password) => async (dispatch) => {
  dispatch(loginLoading());

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      dispatch(loginSuccess(user));
      toast.success("Logged in successfully");
    })
    .catch((error) => {
      toast.error(error.message);
      dispatch(loginFail(error.message));
      return error.message;
    });
};

export const register = (email, password) => async (dispatch) => {
  dispatch(loginLoading());
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    dispatch(loginSuccess(user));
    toast.success("Registered successfully");
  } catch (error) {
    toast.error(error.message);
    dispatch(loginFail(error.message));
    return error.message;
  }
};

export const getUser = () => async (dispatch) => {
  try {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(saveUser(user));
      } else {
        dispatch(saveUser(null));
      }
    });
  } catch (error) {
    toast.success("Logged out");
  }
};

export const logout = () => async (dispatch) => {
  signOut(auth)
    .then(() => {
      toast.success("Logged out");
      dispatch(saveUser(null));
    })
    .catch((error) => {
      toast.error(error.message);
    });
};

export default authSlice.reducer;
