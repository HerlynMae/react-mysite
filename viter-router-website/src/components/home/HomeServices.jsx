import React from "react";
import { FaLinkedin, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const HomeServices = () => {
  return (
    <>
      <section className="services bg-gray-200 min-h-[400px] grid place-content-center">
        <div className="container">
          <div className="servicesWrapper">
            <h2 className="text-4xl font-bold text-gray-800 text-center mb-7">
              Our Services
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              <div className="servicesCard  bg-white p-8 shadow-xl rounded-xl">
                <FaGithub size={30} className="text-blue-600 mb-5" />
                <div className="servicesCardDetails">
                  <h4 className="font-semibold text-xl mb-3">
                    Web Development
                  </h4>
                  <p className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam in dui mauris.
                  </p>
                </div>
              </div>
              <div className="servicesCard  bg-white p-8 shadow-xl rounded-xl">
                <FaTwitter size={30} className="text-blue-600 mb-5" />
                <div className="servicesCardDetails">
                  <h4 className="font-semibold text-xl mb-3">UI/UX Design</h4>
                  <p className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam in dui mauris.
                  </p>
                </div>
              </div>
              <div className="servicesCard  bg-white p-8 shadow-xl rounded-xl">
                <FaLinkedin size={30} className="text-blue-600 mb-5" />
                <div className="servicesCardDetails">
                  <h4 className="font-semibold text-xl mb-3">
                    Digital Marketing
                  </h4>
                  <p className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam in dui mauris.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeServices;
