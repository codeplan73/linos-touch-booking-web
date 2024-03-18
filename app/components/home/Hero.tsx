import React from "react";
import HeroForm from "./HeroForm";

const Hero = () => {
  return (
    <div
      className="relative w-full md:w-[100vw] bg-no-repeat bg-center md:bg-top bg-cover h-[90vh]  overflow-hidden"
      style={{ backgroundImage: "url('/images/bg-main.jpeg')" }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-75"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white gap-8">
        <h4 className="text-primaryColor text-xl text-center">
          15 Years Experienced
        </h4>
        <h2 className="text-6xl font-semibold text-center">
          We Work For You To
        </h2>
        <h2 className="text-6xl font-semibold text-center">
          Give Best Services
        </h2>
        <p className="text-center">
          Experience our renowned customer obserssion and commitment to perfect
          service <br /> delivery. Free quotes available - let us take the
          stress our of cleaning
        </p>
        <HeroForm />
      </div>
    </div>
  );
};

export default Hero;
