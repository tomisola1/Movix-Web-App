import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    saveUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { saveUser } = authSlice.actions;
export const selectUser = (state) => state.user.user;

export default authSlice.reducer;
