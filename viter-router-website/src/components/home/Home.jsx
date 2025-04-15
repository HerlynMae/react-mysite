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
      <footer className="footer">
        <div className="container">
          <ul className="footerSocial">
            <li>
              <a href="">
                <FaGithub />
              </a>
            </li>
            <li>
              <a href="">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="">
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Home;
