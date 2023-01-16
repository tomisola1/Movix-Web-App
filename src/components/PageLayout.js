import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CustomNavbar from "./CustomNavbar";
import Footer from "./Footer";

const PageLayout = ({ children }) => {
  const { user } = useSelector((state) => state.auth);
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });

  const name = user.email.substring(0, user.email.indexOf("@"));

  return (
    <>
      <CustomNavbar
        user={name}
        className={navbar ? "navbar" : "nav-bar"}
        onScroll={changeBackground}
      />
      {children}
      <Footer />
    </>
  );
};

export default PageLayout;
