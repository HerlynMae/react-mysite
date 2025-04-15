import React from "react";

const HomeAbout = () => {
  return (
    <>
      <section className="about py-5 min-h-[400px] bg-white grid place-content-center">
        <div className="container">
          <div className="aboutWrapper">
            <h2 className="text-4xl font-bold text-gray-800 text-center mb-7">
              About Us
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="aboutCard">
                <h4 className="text-xl font-semibold mb-3 text-gray-800">
                  Our Story
                </h4>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie
                  vehicula.
                </p>
              </div>
              <div className="aboutCard">
                <h4 className="text-xl font-semibold mb-3 text-gray-800">
                  Our Mission
                </h4>
                <p className="text-gray-700">
                  Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.
                  Ut in nulla enim. Phasellus molestie magna non est bibendum
                  non venenatis nisl tempor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeAbout;
