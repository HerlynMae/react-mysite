import React from "react";
import HomeAboutCard from "./HomeAboutCard";

const HomeAbout = () => {
  return (
    <>
      <section className="about py-16 bg-white grid place-content-center">
        <div className="container">
          <div className="aboutWrapper">
            <h2 className="text-4xl font-bold text-gray-800 text-center mb-7">
              About Us
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <HomeAboutCard
                title={"Our Story"}
                desc={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula."
                }
              />
              <HomeAboutCard
                title={"Our Mission"}
                desc={
                  "Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor."
                }
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeAbout;
