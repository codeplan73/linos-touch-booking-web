import React from "react";
import Image from "next/image";
import { PiStarFourFill } from "react-icons/pi";

const About = () => {
  return (
    <div className="flex flex-col gap-6 md:gap-12 max-w-7xl container">
      <p className="text-center md:text-left font-light uppercase text-blue-500 text-xs font-sans leading-relaxed">
        / About Us
      </p>

      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6">
        <h2 className="text-2xl md:text-4xl font-sans font-semibold text-secondaryColor">
          Elevating Cleaniness <br /> to Perfection
        </h2>
        <p className="text-balance text-left text-md text-slate-400 md:text-right">
          We are Professionalism in the Cleaning <br /> Industry by Providing
          Services
        </p>
      </div>

      <div className="flex w-full flex-col md:flex-row gap-8">
        <div className="relative bg-[#AEADF1] w-full md:w-3/12 rounded-xl flex flex-col items-center justify-center h-48">
          <PiStarFourFill className="absolute text-green-600 text-2xl top-6 left-6" />
          <h4 className="text-7xl md:text-4xl font-semibold font-sans-serif text-white">
            99%
          </h4>
          <p className="text-md md:text-xs font-sans">Satisfied Clients</p>
          <PiStarFourFill className="absolute text-slate-800 text-2xl bottom-6 right-6" />
        </div>

        <div
          style={{ backgroundImage: "url('/images/about-1.jpeg')" }}
          className="w-full md:w-9/12 bg-no-repeat bg-cover bg-right h-48 rounded-xl"
        ></div>
      </div>

      <div className="flex flex-col md:flex-row items-center md:justify-evenly justify-center gap-6">
        <div className="flex flex-col items-center">
          <h4 className="font-bold text-2xl">Professional Cleanners</h4>
          <p className="text-slate-400 text-md">
            We provide Qualified & Expert
          </p>
        </div>
        <div className="flex flex-col items-center">
          <h4 className="font-bold text-2xl">Flexible Schedule</h4>
          <p className="text-slate-400 text-md">
            No Obligation - May Stop at Any Time!
          </p>
        </div>
        <div className="flex flex-col items-center">
          <h4 className="font-bold text-2xl">Attention to Detail</h4>
          <p className="text-slate-400 text-md">Neat & Cleaning Top Service</p>
        </div>
      </div>
    </div>
  );
};

export default About;
