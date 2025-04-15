import React from "react";
import { FaChevronUp, FaHome, FaInfoCircle } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <header className=" relative header py-4 bg-white shadow-md">
        <div className="container">
          <div className="headerWrapper flex justify-between items-center">
            <h3 className="text-2xl text-blue-600 font-bold">MySite</h3>
            {/* nav */}
            <ul className="headerMainNav flex gap-4">
              <li>
                <a href="" className="flex items-center gap-2">
                  <FaHome /> Home
                </a>
              </li>
              <li>
                <a href="" className="flex items-center gap-2">
                  <FaInfoCircle /> About
                </a>
              </li>
              <li>
                <a href="" className="flex items-center gap-2">
                  More <FaChevronUp />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
