import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import BoxReveal from "@/components/ui/box-reveal";

const HeroForm = () => {
  return (
    <form
      data-aos="fade-up"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      className="relative flex items-center justify-start w-full md:w-6/12"
    >
      <BiSearchAlt className="absolute text-2xl font-bold text-slate-400 left-4" />
      <input
        type="text"
        className="w-full px-10 py-4 text-xl border outline-none text-slate-700 md:px-12 md:py-6 border-secondaryColor rounded-2xl bg-slate-200 opacity-60 md:text-2xl"
        placeholder="Enter your post code"
        id=""
      />
      <button className="absolute px-2 py-2 font-sans font-semibold border-none open-sans-bold hover:bg-secondaryColor hover:text-white bg-warningColor md:px-6 text-md md:text-xl md:py-4 rounded-xl right-4 text-secondaryColor">
        Find your cleaner
      </button>
    </form>
  );
};

export default HeroForm;
