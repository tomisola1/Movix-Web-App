import "./style.css";
import CustomNavbar from "../../components/CustomNavbar";
import Header from "../../components/Header";
import FeaturedMovies from "../../components/FeaturedMovies";
import NewArrivals from "../../components/NewArrivals";
import ExclusiveVideos from "../../components/ExclusiveVideos";
import FeaturedCasts from "../../components/FeaturedCasts";

function HomePage() {
  return (
    <>
      <CustomNavbar user="tomi" />
      <Header />
      <FeaturedMovies />
      <NewArrivals />
      <ExclusiveVideos />
      <FeaturedCasts />
    </>
  );
}

export default HomePage;
