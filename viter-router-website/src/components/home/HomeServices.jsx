import React from "react";
import { FaLinkedin, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import HomeServicesCard from "./HomeServicesCard";

const HomeServices = () => {
  return (
    <>
      <section className="services py-16 bg-gray-200  grid place-content-center">
        <div className="container">
          <div className="servicesWrapper">
            <h2 className="text-4xl font-bold text-gray-800 text-center mb-7">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <HomeServicesCard
                icon={<FaGithub size={30} className="text-blue-600 mb-5" />}
                title={"Web Development"}
                desc={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris."
                }
              />
              <HomeServicesCard
                icon={<FaTwitter size={30} className="text-blue-600 mb-5" />}
                title={"UI/UX Design"}
                desc={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris."
                }
              />
              <HomeServicesCard
                icon={<FaLinkedin size={30} className="text-blue-600 mb-5" />}
                title={"Digital Marketing"}
                desc={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris."
                }
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeServices;
