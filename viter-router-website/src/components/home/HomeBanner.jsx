import React from "react";

const HomeBanner = () => {
  return (
    <>
      <section className="banner bg-gray-200 py-16 grid place-content-center">
        <div className="container">
          <div className="bannerWrapper ">
            <h1 className="font-bold text-5xl text-center text-gray-800 ">
              Welcome to MySite
            </h1>
            <p className="text-center text-gray-600 my-10 text-lg">
              A simple one-page website built with React, React Icons, and
              smooth scrolling navigation.
            </p>
            {/* button */}
            <div className="text-center">
              <button className="inline-block p-4 bg-blue-500 text-white font-bold text-xl rounded-xl hover:bg-blue-600 transition duration-200">
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeBanner;
