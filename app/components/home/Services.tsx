"use client";

import React from "react";
import Link from "next/link";
import ServiceSlider from "../Services/ServiceSlider";

const Services = () => {
  return (
    <div className="w-full md:max-w-7xl flex flex-col items-center justify-center container gap-12">
      <h2 className="text-4xl font-bold">Our Services</h2>
      <p>we work many fields to clean your surrounding area</p>

      <ServiceSlider />
      <div>
        <Link href="/services">{`See More >> `}</Link>
      </div>
    </div>
  );
};

export default Services;
