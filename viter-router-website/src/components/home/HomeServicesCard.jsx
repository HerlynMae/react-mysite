import React from "react";

const HomeServicesCard = ({ icon, title, desc }) => {
  return (
    <>
      <div className="servicesCard  bg-white p-8 shadow-xl rounded-xl">
        {icon}
        <div className="servicesCardDetails">
          <h4 className="font-semibold text-xl mb-3">{title}</h4>
          <p className="text-gray-700">{desc}</p>
        </div>
      </div>
    </>
  );
};

export default HomeServicesCard;
