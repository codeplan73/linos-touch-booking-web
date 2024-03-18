import React from "react";
import Link from "next/link";
import HowItWorkCard from "./howItWorks/HowItWorkCard";

const HowItWorks = () => {
  return (
    <div className="w-full flex flex-col py-8 items-center gap-8">
      <h4 className="text-sm md:text-md uppercase text-gray4 font-thin font-sans">
        how it works
      </h4>
      <h1 className="font-sans font-semibold text-2xl md:text-4xl text-center">
        How to Get Our Service
      </h1>
      <p className="text-gray3 text-balance text-center text-">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit fuga
        optio nulla libero possimus eaque consectetur quis modi voluptas,
        commodi veniam, numquam quisquam quos soluta! Quia sunt iure atque at!
      </p>

      <div className="grid grid-col-1 md:grid-cols-3 font-sans border-none md:border md:overflow-hidden rounded-xl md:border-l-rounded-xl gap-4 md:gap-0">
        <HowItWorkCard
          step="Step 1"
          title="Enter postcode"
          text="Lorem ipsum dolor sit amet consectetur"
        />
        <HowItWorkCard
          step="Step 2"
          title="Book Swiftly"
          text="Lorem ipsum dolor sit amet consectetur"
        />
        <HowItWorkCard
          step="Step 3"
          title="Our Team Arrives"
          text="Lorem ipsum dolor sit amet consectetur"
        />
      </div>

      <Link
        href="/services"
        className="text-secondaryColor bg-warningColor px-4 py-2 rounded-xl font-sans font-semibold hover:text-white hover:bg-secondaryColor"
      >
        Learn More
      </Link>
    </div>
  );
};

export default HowItWorks;
