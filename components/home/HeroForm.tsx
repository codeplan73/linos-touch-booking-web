import React from "react";
import { BiSearchAlt } from "react-icons/bi";

const HeroForm = () => {
  return (
    <form className="w-full md:w-6/12 flex items-center justify-start relative">
      <BiSearchAlt className="absolute text-2xl font-bold text-slate-400 left-4" />
      <input
        type="text"
        className="text-slate-700 w-full px-10 md:px-12 py-4 md:py-6 outline-none border border-secondaryColor rounded-2xl bg-slate-200 opacity-60 text-xl md:text-2xl"
        placeholder="Enter your post code"
        id=""
      />
      <button className="hover:bg-secondaryColor hover:text-white bg-warningColor border-none px-2 md:px-6 text-md md:text-xl py-2 md:py-4 rounded-xl absolute right-4 text-secondaryColor font-semibold font-sans">
        Find your cleaner
      </button>
    </form>
  );
};

export default HeroForm;
