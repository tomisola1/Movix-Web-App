import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import MovieCard from "../../../components/MovieCard";
import PageLayout from "../../../components/PageLayout";
import "./style.css";

const Movies = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  const { movies } = useSelector((state) => state.movie);
  return (
    <PageLayout noScroll={true}>
      <div className="all-movies">
        <h2>Featured Movie</h2>

        <div className="movies">
          {movies.map((movie, idx) => (
            <MovieCard key={idx} movie={movie} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Movies;
