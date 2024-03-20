import React from "react";

const Banner = () => {
  return (
    <div
      className="w-full h-[50vh] bg-teal-500 bg-no-repeat bg-center md:bg-bottom bg-cover overflow-hidden flex items-center justify-center"
      style={{ backgroundImage: "url('/images/about-banner.jpeg" }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <h4 className="text-white text-4xl md:text-7xl font-bold z-20">
        About us
      </h4>
    </div>
  );
};

export default Banner;
