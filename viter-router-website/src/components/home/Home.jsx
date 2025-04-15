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
      <footer className="footer bg-gray-800 text-gray-500 py-10">
        <div className="container">
          <ul className="footerSocial flex items-center justify-center gap-4">
            <li>
              <a href="">
                <FaGithub size={30} />
              </a>
            </li>
            <li>
              <a href="">
                <FaTwitter size={30} />
              </a>
            </li>
            <li>
              <a href="">
                <FaLinkedin size={30} />
              </a>
            </li>
          </ul>
          <p className="text-lg text-center mt-3">
            &copy; 2025 MySite. All Right Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Home;
