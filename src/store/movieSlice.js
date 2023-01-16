import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

const initialState = {
  loading: false,
  movies: [],
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    getMoviesLoading: (state) => {
      state.loading = true;
    },
    getMoviesSuccess: (state, action) => {
      state.loading = false;
      state.movies = action.payload;
    },
    getMoviesFail: (state, action) => {
      state.loading = false;
    },
  },
});

export const { getMoviesLoading, getMoviesFail, getMoviesSuccess } =
  movieSlice.actions;

export const getAllMovies = () => async (dispatch, getState) => {
  dispatch(getMoviesLoading());
  try {
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s="Harry"&type=movie&page=10`
    );
    dispatch(getMoviesSuccess(response.data.Search));
  } catch (error) {
    dispatch(getMoviesFail(error));
  }
};

export default movieSlice.reducer;
