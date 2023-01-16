import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CustomNavbar from "./CustomNavbar";
import Footer from "./Footer";

const PageLayout = ({ children, noScroll }) => {
  const { user } = useSelector((state) => state.auth);
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 66 && !noScroll) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  });

  const name = user.email.substring(0, user.email.indexOf("@"));

  return (
    <>
      <CustomNavbar
        user={name}
        className={navbar ? "navbar" : "nav-bar"}
        noScroll={noScroll}
      />
      {children}
      <Footer />
    </>
  );
};

export default PageLayout;
