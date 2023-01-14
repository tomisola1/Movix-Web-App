import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import "./style.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socials">
        <FaFacebookSquare />
        <FaInstagram />
        <FaTwitter />
        <FaYoutube />
      </div>
      <div className="footer-links">
        <a href="/#">Conditions of Use</a>
        <a href="/#">Privacy & Policy</a>
        <a href="/#">Press Room</a>
      </div>
      <span className="copy">&copy; 2021 Movix</span>
    </div>
  );
}

export default Footer;
