import "./style.css";
import CustomNavbar from "../../components/CustomNavbar";
import Header from "../../components/Header";
import FeaturedMovies from "../../components/FeaturedMovies";
import NewArrivals from "../../components/NewArrivals";
import ExclusiveVideos from "../../components/ExclusiveVideos";
import FeaturedCasts from "../../components/FeaturedCasts";
import Footer from "../../components/Footer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovies } from "../../store/movieSlice";

function HomePage() {
  const dispatch = useDispatch();
  const { loading, movies } = useSelector((state) => state.movies);
  useEffect(() => {
    dispatch(getAllMovies());
  }, []);

  return (
    <>
      <CustomNavbar user="tomisola solomon" />
      <Header />
      <FeaturedMovies />
      <NewArrivals />
      <ExclusiveVideos />
      <FeaturedCasts />
      <Footer />
    </>
  );
}

export default HomePage;
