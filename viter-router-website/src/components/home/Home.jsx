import React from "react";
import {
  FaChevronUp,
  FaHome,
  FaInfoCircle,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import Header from "../header/Header";
import HomeBanner from "./HomeBanner";
import HomeAbout from "./HomeAbout";
import { FaGithub } from "react-icons/fa6";
import HomeServices from "./HomeServices";
import HomeContact from "./HomeContact";
import HeaderDesktop from "../header/Header";
import Footer from "../footer/Footer";

const Home = () => {
  return (
    <>
      {/* header */}
      <Header />

      {/* banner */}
      <HomeBanner />
      {/* about us */}
      <HomeAbout />
      {/* services */}
      <HomeServices />
      {/* contact */}
      <HomeContact />
      {/* footer */}
      <Footer />
    </>
  );
};

export default Home;
