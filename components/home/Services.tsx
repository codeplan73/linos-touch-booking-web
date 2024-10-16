"use client";

import React from "react";
import Link from "next/link";
import ServiceCard from "@/app/(public)/services/_components/ServiceCardHover";

const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-12 md:max-w-7xl">
      <div className="flex flex-col items-center justify-center gap-4">
        <h2 className="text-2xl font-bold md:text-4xl">Our Services</h2>
        <p className="font-sans text-center text-md">
          we work many fields to clean your surrounding area
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <ServiceCard
          style="bg-white"
          image="/images/services/service-1.png"
          title="House Cleaning"
          text="We performed housekeeping services according to the wishes of our client"
        />
        <ServiceCard
          style="bg-warningColor shadow-xl drop-shadow-xl "
          image="/images/services/service-2.png"
          title="Office Cleaning"
          text="When you choose us, youu get a deeper cleaning experience"
        />
        <ServiceCard
          style="bg-white"
          image="/images/services/service-3.png"
          title="Curtain Cleaning"
          text="We will take down uninstall your curtains and dry-clean right on the spot!"
        />
      </div>
      <div>
        <Link
          href="/services"
          className="font-sans text-lg font-semibold text-warningColor"
        >{`See More >> `}</Link>
      </div>
    </div>
  );
};

export default Services;
