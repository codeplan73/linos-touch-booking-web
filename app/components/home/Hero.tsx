import React from "react";
import HeroForm from "./HeroForm";
import { TypewriterEffect } from "../ui/typewriter-effect";

const Hero = () => {
  const words1 = [
    {
      text: "We",
      className: "text-4xl md:text-7xl text-center text-white",
    },
    {
      text: "Work",
      className: "text-4xl md:text-7xl text-center text-white",
    },
    {
      text: "For",
      className: "text-4xl md:text-7xl text-center text-white",
    },
    {
      text: "You",
      className: "text-4xl md:text-7xl text-center text-white",
    },
    {
      text: "To",
      className: "text-4xl md:text-7xl text-center text-white",
    },
  ];
  const words2 = [
    {
      text: "Give",
      className: "text-4xl md:text-7xl text-center text-white",
    },
    {
      text: "Best",
      className: "text-4xl md:text-7xl text-center text-white",
    },
    {
      text: "Services",
      className: "text-4xl md:text-7xl text-center text-white",
    },
  ];
  return (
    <div
      className="relative w-full md:w-[100vw] bg-no-repeat bg-center md:bg-top bg-cover h-[100vh] overflow-hidden px-6"
      style={{ backgroundImage: "url('/images/bg-main.jpeg')" }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-65"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-start pt-52  items-center text-white gap-8 md:gap-10 px-6">
        <h4 className="text-warningColor text-xl md:text-2xl text-center font-sans  md:mt-12 font-semibold">
          15 Years Experienced
        </h4>

        {/* <h2 className="text-6xl font-semibold text-center">
          We Work For You To
        </h2> */}
        <TypewriterEffect words={words1} />
        {/* <h2 className="text-6xl font-semibold text-center">
          Give Best Services
        </h2> */}
        <TypewriterEffect words={words2} />
        <p className="text-center font-sans text-md">
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
