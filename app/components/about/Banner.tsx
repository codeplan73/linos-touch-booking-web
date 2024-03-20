import React from "react";

const Banner = () => {
  return (
    <div
      className="relative w-full h-[20vh] md:h-[50vh] bg-teal-500 bg-no-repeat bg-bottom md:bg-bottom bg-cover overflow-hidden flex items-center justify-center"
      style={{ backgroundImage: "url('/images/about-banner.jpeg" }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <h4 className="text-white text-3xl md:text-7xl font-bold z-20">
        About us
      </h4>
    </div>
  );
};

export default Banner;
