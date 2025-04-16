import React, { useState } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaEnvelope,
  FaHome,
  FaInfoCircle,
} from "react-icons/fa";

const Header = () => {
  const [desktopOpen, setDesktopOpen] = useState(false);

  const toggleDesktop = () => setDesktopOpen(!desktopOpen);

  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobile = () => setMobileOpen(!mobileOpen);
  return (
    <>
      {/* desktop */}
      <header className="hidden md:block relative py-6 bg-white shadow-md">
        <div className=" container">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl text-blue-600 font-bold">MySite</h3>

            <ul className="flex items-center gap-4">
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 text-gray-700 hover:text-blue-600 hover:bg-blue-100 px-2 py-1 rounded-md transition duration-200"
                >
                  <FaHome /> Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 text-gray-700 hover:text-blue-600 hover:bg-blue-100 px-2 py-1 rounded-md transition duration-200"
                >
                  <FaInfoCircle /> About
                </a>
              </li>
              <li className="relative">
                <a
                  href="#"
                  onClick={toggleDesktop}
                  className="text-gray-700 hover:text-blue-600 hover:bg-blue-100 px-2 py-1 rounded-md transition duration-200 flex items-center gap-1"
                >
                  <span>More</span>
                  <span>
                    {desktopOpen ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </a>
                {desktopOpen && (
                  <div className="absolute top-8 right-0 bg-white shadow-lg rounded-md py-2 px-6 w-52 z-10">
                    <div className="py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-100 px-2  rounded-md transition duration-200 w-fit">
                      Services
                    </div>
                    <div className="py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-100 px-2  rounded-md transition duration-200 w-fit">
                      Portfolio
                    </div>
                    <div className="flex items-center gap-3  py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-100 px-2  rounded-md transition duration-200 w-fit">
                      <FaEnvelope /> Contact
                    </div>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </header>
      {/* mobile */}
      <header className="block md:hidden relative py-6 bg-white shadow-md">
        <div className=" container">
          <div className="flex justify-between items-center ">
            <h3 className="text-2xl text-blue-600 font-bold">MySite</h3>

            <a
              href="#"
              onClick={toggleMobile}
              className="text-xl transition duration-200"
            >
              {mobileOpen ? <FaChevronUp /> : <FaChevronDown />}
            </a>
          </div>
          {mobileOpen && (
            <ul className="space-y-4 pt-6 transition duration-200">
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 text-gray-700 hover:text-blue-600 hover:bg-blue-100 px-2 py-1 rounded-md transition duration-200"
                >
                  <FaHome /> Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 text-gray-700 hover:text-blue-600 hover:bg-blue-100 px-2 py-1 rounded-md transition duration-200"
                >
                  <FaInfoCircle /> About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 text-gray-700 hover:text-blue-600 hover:bg-blue-100 px-2 py-1 rounded-md transition duration-200"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 text-gray-700 hover:text-blue-600 hover:bg-blue-100 px-2 py-1 rounded-md transition duration-200"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 text-gray-700 hover:text-blue-600 hover:bg-blue-100 px-2 py-1 rounded-md transition duration-200"
                >
                  <FaEnvelope /> Contact
                </a>
              </li>
            </ul>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
