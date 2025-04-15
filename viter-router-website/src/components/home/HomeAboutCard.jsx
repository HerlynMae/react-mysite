import React from "react";

const HomeAboutCard = ({ title, desc }) => {
  return (
    <>
      <div className="aboutCard">
        <h4 className="text-xl font-semibold mb-3 text-gray-800">{title}</h4>
        <p className="text-gray-700">{desc}</p>
      </div>
    </>
  );
};

export default HomeAboutCard;
