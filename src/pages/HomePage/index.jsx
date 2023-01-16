import HeroImage from "../../components/HeroImage";
import ExclusiveVideos from "../../components/ExclusiveVideos";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovies, getCast } from "../../store/movieSlice";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import MovieCard from "../../components/MovieCard";
import PageLayout from "../../components/PageLayout";
import { Link } from "react-router-dom";
import CastCard from "../../components/CastCard/CastCard";
import "./style.css";

function HomePage() {
  const dispatch = useDispatch();
  const { movies, cast } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(getAllMovies());
    dispatch(getCast());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <PageLayout>
        <HeroImage heroMovie={movies[5]} />

        <div className="featured-container">
          <div className="heading">
            <h2>Featured Movie</h2>
            <Link className="see-more" to="/movies">
              <span>See more</span>
              <FaAngleRight className="angle-right-icon" />
            </Link>
          </div>
          <div className="movies-container">
            <FaAngleLeft className="angle-left" />
            <div className="movie-list">
              {movies.slice(10).map((movie, idx) => (
                <MovieCard key={idx} movie={movie} />
              ))}
            </div>
            <FaAngleRight className="angle-right" />
          </div>
        </div>

        <div className="featured-container">
          <div className="heading">
            <h2>New Arrival</h2>
            <Link className="see-more" to="/movies">
              <span>See more</span>
              <FaAngleRight className="angle-right-icon" />
            </Link>
          </div>
          <div className="movies-container">
            <FaAngleLeft className="angle-left" />
            <div className="movie-list">
              {movies.slice(0, 10).map((movie, idx) => (
                <MovieCard key={idx} movie={movie} />
              ))}
            </div>
            <FaAngleRight className="angle-right" />
          </div>
        </div>

        <ExclusiveVideos />

        <div className="cast-container">
          <div className="heading">
            <h2>Featured Casts</h2>
            <Link className="see-more" to="/casts">
              <span>See more</span>
              <FaAngleRight className="angle-right-icon" />
            </Link>
          </div>
          <div className="movies-container">
            <FaAngleLeft className="angle-left" />
            <div className="movie-list">
              {cast.slice(0, 10).map((cast, idx) => (
                <CastCard key={idx} cast={cast} />
              ))}
            </div>
            <FaAngleRight className="angle-right" />
          </div>
        </div>
      </PageLayout>
    </>
  );
}

export default HomePage;
