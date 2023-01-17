import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../util/config";

const API_KEY = process.env.REACT_APP_API_KEY;

const initialState = {
  loading: false,
  loadingCast: false,
  movies: [],
  cast: [],
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
    getCastLoading: (state) => {
      state.loadingCast = true;
    },
    getCastSuccess: (state, action) => {
      state.loadingCast = false;
      state.cast = action.payload;
    },
    getCastFail: (state, action) => {
      state.loading = false;
    },
  },
});

export const {
  getMoviesLoading,
  getMoviesFail,
  getMoviesSuccess,
  getCastLoading,
  getCastSuccess,
  getCastFail,
} = movieSlice.actions;

export const getAllMovies = () => async (dispatch, getState) => {
  dispatch(getMoviesLoading());
  try {
    const response = await axios.get(
      `${API_URL}/movie/popular?api_key=${API_KEY}`
    );
    dispatch(getMoviesSuccess(response.data.results));
  } catch (error) {
    dispatch(getMoviesFail(error));
  }
};

export const getCast = () => async (dispatch, getState) => {
  dispatch(getCastLoading());
  try {
    const response = await axios.get(
      `${API_URL}/person/popular?api_key=${API_KEY}`
    );
    dispatch(getCastSuccess(response.data.results));
  } catch (error) {
    dispatch(getCastFail(error));
  }
};

export const searchMovies = () => async (dispatch, getState) => {
  dispatch(getMoviesLoading());
  try {
    const response = await axios.get(
      `${API_URL}/search/movie?api_key=${API_KEY}`
    );
    dispatch(getMoviesSuccess(response.data.results));
  } catch (error) {
    dispatch(getMoviesFail(error));
  }
};

export default movieSlice.reducer;
