import React from "react";
import Link from "next/link";
import HowItWorkCard from "./howItWorks/HowItWorkCard";

const HowItWorks = () => {
  return (
    <div className="flex flex-col items-center w-full gap-8 py-8">
      <h4 className="font-sans font-thin uppercase text-md md:text-lg text-secondaryColor">
        how it works
      </h4>
      <h1 className="font-sans text-3xl font-semibold text-center md:text-6xl">
        How to Get Our Service
      </h1>
      <p className="text-center text-gray3 text-balance">
        Getting started with our service is simple. Just follow these easy steps
        to schedule your service quickly and efficiently. Our team ensures a
        seamless experience from booking to completion.
      </p>

      <div
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        className="grid gap-4 font-sans border-none grid-col-1 md:grid-cols-3 md:border md:overflow-hidden rounded-xl md:border-l-rounded-xl md:gap-0"
      >
        <HowItWorkCard
          step="Step 1"
          title="Enter Postcode"
          text="Provide your location to see available services in your area."
        />
        <HowItWorkCard
          step="Step 2"
          title="Book Swiftly"
          text="Choose a convenient time slot, and confirm your booking within minutes."
        />
        <HowItWorkCard
          step="Step 3"
          title="Our Team Arrives"
          text="Sit back and relax as our professional team arrives to deliver top-quality service."
        />
      </div>

      <Link
        href="/services"
        className="px-6 py-3 font-sans font-semibold text-secondaryColor bg-warningColor rounded-xl hover:text-white hover:bg-secondaryColor"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        Learn More
      </Link>
    </div>
  );
};

export default HowItWorks;
