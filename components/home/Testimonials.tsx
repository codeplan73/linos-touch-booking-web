import TestimonialCard from "@/app/(public)/testimonial/_components/TestimonialCard";
import { testimonials } from "@/lib/domFiles";
import Link from "next/link";
import React from "react";

const Testimonials = () => {
  return (
    <div className="w-full md:max-w-7xl flex flex-col items-center justify-center gap-10 md:gap-20">
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center md:items-start justify-start gap-4">
          <p className="text-md font-sans uppercase font-light tracking-widest">
            Testimonials
          </p>
          <h2 className="hidden md:block md:text-6xl capitalize tracking-wide font-sans leading-tight">
            what they say <br /> about our service
          </h2>
          <h2 className="md:hidden text-3xl text-center md:text-6xl capitalize tracking-wide font-sans leading-tight">
            what they say about our service
          </h2>
        </div>
        <Link
          href="/testimonial"
          className="hidden md:block bg-warningColor rounded-full py-6 px-10 text-secondaryColor text-md font-semibold font-sans"
        >
          See All Testimonial
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((test) => (
          <TestimonialCard
            key={test.id}
            name={test.name}
            rating={test.rating}
            text={test.text}
            title={test.title}
          />
        ))}
      </div>

      <Link
        href="/testimonial"
        className="block md:hidden bg-warningColor rounded-full py-3 px-6 text-secondaryColor text-sm font-semibold font-sans mt-12"
      >
        See All Testimonial
      </Link>
    </div>
  );
};

export default Testimonials;
