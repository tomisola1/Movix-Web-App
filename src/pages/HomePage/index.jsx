import "./style.css";
import CustomNavbar from "../../components/CustomNavbar";
import Header from "../../components/Header";
import FeaturedMovies from "../../components/FeaturedMovies";

function HomePage() {
  return (
    <>
      <CustomNavbar user="tomi" />
      <Header />
      <FeaturedMovies />
    </>
  );
}

export default HomePage;
