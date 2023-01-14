import "./style.css";
import CustomNavbar from "../../components/CustomNavbar";
import Header from "../../components/Header";
import FeaturedMovies from "../../components/FeaturedMovies";
import NewArrivals from "../../components/NewArrivals";
import ExclusiveVideos from "../../components/ExclusiveVideos";
import FeaturedCasts from "../../components/FeaturedCasts";
import Footer from "../../components/Footer";

function HomePage() {
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
