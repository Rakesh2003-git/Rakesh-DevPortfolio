import React from "react";
import { logoIconsList } from "../constants/index.js";

const LogoIcon = ({ icon }) => {
  return (
    <div className="flex-none flex-center marquee-item">
      <img
        src={icon.imgPath}
        alt="Technology logo"
      />
    </div>
  );
};

const LogoSection = () => {
  return (
    <div className="md:my-20 my-10 relative">

      {/* Gradient edges */}
      <div className="gradient-edge" />
      <div className="gradient-edge" />

      {/* Marquee */}
      <div className="marquee h-52">
        <div className="marquee-box md:gap-12 gap-5">

          {/* First set of logos */}
          {logoIconsList.map((icon, index) => (
            <LogoIcon
              key={`first-${index}`}
              icon={icon}
            />
          ))}

          {/* Duplicate set for infinite scrolling */}
          {logoIconsList.map((icon, index) => (
            <LogoIcon
              key={`second-${index}`}
              icon={icon}
            />
          ))}

        </div>
      </div>

    </div>
  );
};

export default LogoSection;